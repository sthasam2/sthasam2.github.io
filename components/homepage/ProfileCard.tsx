import Image from "next/image";

import { siteMetadata } from "@/data/siteMetadata";

export function ProfileCard({ imageSrc }: { imageSrc?: string }) {
  return (
    <>
      <div className="card z-10 mb-8 hidden w-80 scale-100 rounded-lg shadow-lg shadow-cyan-100/50 transition-all duration-200 ease-out hover:z-50 hover:scale-[1.15] dark:shadow-cyan-700/50 lg:block">
        <figure>
          <Image
            src={imageSrc ?? "/static/portfolio.jpg"}
            alt="avatar"
            className="object-cover h-60"
            height={200}
            width={384}
          />
        </figure>

        <div className="card-body">
          <h2 className="text-3xl card-title">{siteMetadata.fullName}</h2>

          <div className="mb-2">
            {siteMetadata.profileTags.map((value) => value).join(" | ")}
          </div>

          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <p className="px-2">{siteMetadata.designation}</p>
          </div>

          <div className="flex items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <p className="px-2">{siteMetadata.location}</p>
          </div>

          <div className="flex items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <a className="px-2" href={`mailto:${siteMetadata.email}`}>
              {siteMetadata.email}
            </a>
          </div>
          <div className="flex items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            <p className="flex space-x-1.5 px-2">
              <a
                target="_blank"
                href={siteMetadata.socialAccounts.github}
                rel="noreferrer"
                className="link-hover link"
              >
                GitHub
              </a>
              <span className="">|</span>
              <a
                target="_blank"
                href={siteMetadata.socialAccounts.linkedin}
                rel="noreferrer"
                className="link-hover link"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>

        <div className="p-0 card-body">
          <span className=" h-1.5 rounded-b-lg bg-gradient-to-r from-green-300 via-blue-500 to-purple-600" />
        </div>
      </div>
    </>
  );
}
