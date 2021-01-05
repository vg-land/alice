import React from "react"

const PostCard = (props: any) => {
  const { value = {} } = props
  return (
    <div className="overflow-hidden shadow-lg rounded-lg h-90 w-80 cursor-pointer m-auto relative">
      <img
        alt="blog photo"
        src="https://picsum.photos/id/638/200/200"
        className="rounded-t-lg max-h-40 w-full object-cover"
      />
      <div className="bg-white dark:bg-gray-800 w-full p-4 relative">
        <p
          className="text-gray-800 dark:text-white text-xl font-medium mb-2 truncate"
          title={value.title}
        >
          {value.title}
        </p>
        <p className="text-gray-400 dark:text-gray-300 font-light text-md">
          Work at home, remote, is the new age of the job, every person can work
          at home....
        </p>
        <div className="flex items-center mt-4">
          <a href="#" className="block relative">
            <img
              alt="profil"
              src="https://picsum.photos/id/638/200/200"
              className="mx-auto rounded-full h-10 w-10 "
            />
          </a>
          <div className="flex flex-col justify-between ml-4 text-sm">
            <p className="text-gray-800 dark:text-white">Jean Jacques</p>
            <p className="text-gray-400 dark:text-gray-300">{value.date}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCard
