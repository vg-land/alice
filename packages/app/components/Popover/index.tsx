import React, {
  useRef,
  useLayoutEffect,
  useState,
  useCallback,
  useEffect,
  forwardRef,
} from "react"
import { PopoverPortal } from "./PopoverPortal"
import {
  ContentLocation,
  ContentLocationGetter,
  PopoverPosition,
  PopoverProps,
  PopoverState,
} from "./types"
import { Constants, rectsAreEqual } from "./util"
import { usePopover } from "./usePopover"
import { useMemoizedArray } from "./useMemoizedArray"

export { useArrowContainer } from "./useArrowContainer"
export { ArrowContainer } from "./ArrowContainer"
export { usePopover }

const Popover = forwardRef<HTMLElement, PopoverProps>(
  (
    {
      isOpen,
      children,
      content,
      positions: externalPositions = Constants.DEFAULT_POSITIONS,
      align = Constants.DEFAULT_ALIGN,
      padding = 0,
      reposition = true,
      containerParent = window.document.body,
      containerClassName = "react-tiny-popover-container",
      containerStyle,
      contentLocation,
      boundaryInset = 0,
      onClickOutside,
    },
    externalRef,
  ) => {
    const positions = useMemoizedArray(externalPositions)

    // TODO: factor prevs out into a custom prevs hook
    const prevPositions = useRef<PopoverPosition[] | undefined>()
    const prevContentLocation = useRef<
      ContentLocation | ContentLocationGetter | undefined
    >()
    const prevReposition = useRef(reposition)

    const childRef = useRef<HTMLElement>()

    const [popoverState, setPopoverState] = useState<PopoverState>({
      isPositioned: false,
      align,
      nudgedLeft: 0,
      nudgedTop: 0,
      position: positions[0],
      padding,
      childRect: Constants.EMPTY_CLIENT_RECT,
      popoverRect: Constants.EMPTY_CLIENT_RECT,
      parentRect: Constants.EMPTY_CLIENT_RECT,
      boundaryInset,
    })

    const onPositionPopover = useCallback(
      (popoverState: PopoverState) => setPopoverState(popoverState),
      [],
    )

    const [positionPopover, popoverRef] = usePopover({
      childRef,
      containerClassName,
      containerParent,
      contentLocation,
      positions,
      align,
      padding,
      boundaryInset,
      reposition,
      onPositionPopover,
    })

    useLayoutEffect(() => {
      let shouldUpdate = true
      const updatePopover = () => {
        if (isOpen && shouldUpdate && childRef.current && popoverRef.current) {
          const childRect = childRef.current?.getBoundingClientRect()
          const popoverRect = popoverRef.current?.getBoundingClientRect()
          if (
            !rectsAreEqual(childRect, {
              top: popoverState.childRect.top,
              left: popoverState.childRect.left,
              width: popoverState.childRect.width,
              height: popoverState.childRect.height,
              bottom:
                popoverState.childRect.top + popoverState.childRect.height,
              right: popoverState.childRect.left + popoverState.childRect.width,
            }) ||
            popoverRect.width !== popoverState.popoverRect.width ||
            popoverRect.height !== popoverState.popoverRect.height ||
            popoverState.padding !== padding ||
            popoverState.align !== align ||
            positions !== prevPositions.current ||
            contentLocation !== prevContentLocation.current ||
            reposition !== prevReposition.current
          ) {
            positionPopover()
          }

          // TODO: factor prev checks out into the custom prevs hook
          if (positions !== prevPositions.current) {
            prevPositions.current = positions
          }
          if (contentLocation !== prevContentLocation.current) {
            prevContentLocation.current = contentLocation
          }
          if (reposition !== prevReposition.current) {
            prevReposition.current = reposition
          }

          if (shouldUpdate) {
            window.requestAnimationFrame(updatePopover)
          }
        }
      }

      window.requestAnimationFrame(updatePopover)

      return () => {
        shouldUpdate = false
      }
    }, [
      isOpen,
      popoverRef,
      popoverState.childRect.width,
      popoverState.childRect.height,
      popoverState.childRect.top,
      popoverState.childRect.left,
      popoverState.popoverRect.width,
      popoverState.popoverRect.height,
      popoverState.padding,
      popoverState.align,
      positionPopover,
      align,
      padding,
      positions,
      reposition,
      boundaryInset,
      contentLocation,
    ])

    useLayoutEffect(() => {
      if (!isOpen) setPopoverState((prev) => ({ ...prev, isPositioned: false }))
    }, [isOpen])

    useEffect(() => {
      const popoverElement = popoverRef.current
      if (popoverState.isPositioned) {
        Object.assign(popoverElement.style, containerStyle)
      }

      return () => {
        Object.keys(containerStyle ?? {}).forEach(
          (key) =>
            (popoverElement.style[
              key as keyof Omit<typeof containerStyle, "length" | "parentRule">
            ] = null),
        )
      }
    }, [containerStyle, isOpen, popoverRef, popoverState.isPositioned])

    useLayoutEffect(() => {
      popoverRef.current.className = containerClassName
    }, [containerClassName, popoverRef])

    const handleOnClickOutside = useCallback(
      (e: MouseEvent) => {
        if (
          isOpen &&
          !popoverRef?.current?.contains(e.target as Node) &&
          !childRef?.current?.contains(e.target as Node)
        ) {
          onClickOutside?.(e)
        }
      },
      [isOpen, onClickOutside, popoverRef],
    )

    const handleWindowResize = useCallback(() => {
      window.requestAnimationFrame(positionPopover)
    }, [positionPopover])

    useEffect(() => {
      window.addEventListener("click", handleOnClickOutside)
      window.addEventListener("resize", handleWindowResize)
      return () => {
        window.removeEventListener("click", handleOnClickOutside)
        window.removeEventListener("resize", handleWindowResize)
      }
    }, [handleOnClickOutside, handleWindowResize])

    const handleRef = useCallback(
      (node: HTMLElement) => {
        childRef.current = node
        if (externalRef != null) {
          if (typeof externalRef === "object") {
            ;(externalRef as React.MutableRefObject<HTMLElement>).current = node
          } else if (typeof externalRef === "function") {
            ;(externalRef as (instance: HTMLElement) => void)(node)
          }
        }
      },
      [externalRef],
    )

    const renderChild = () =>
      React.cloneElement(children as JSX.Element, {
        ref: handleRef,
      })

    const renderPopover = () => {
      if (!isOpen) return null
      return (
        <PopoverPortal element={popoverRef.current} container={containerParent}>
          {typeof content === "function" ? content(popoverState) : content}
        </PopoverPortal>
      )
    }

    return (
      <>
        {renderChild()}
        {renderPopover()}
      </>
    )
  },
)

export default Popover
