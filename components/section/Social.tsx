import React from 'react'
import Link from "next/link"
import { FaGithub, FaLinkedinIn, FaYoutube, FaSquareXTwitter } from "react-icons/fa6"

const socials = [
  {
    icon: <FaGithub />,
    path: '#',
  },
  {
    icon: <FaLinkedinIn />,
    path: '#',
  },
  {
    icon: <FaYoutube />,
    path: '#',
  },
  {
    icon: <FaSquareXTwitter />,
    path: '#',
  },
]

type SocialProps = {
  containerStyles: string;
  iconStyles: string;
}

function Social({ containerStyles, iconStyles }: SocialProps) {
  return (
    <div
      className={containerStyles}
    >
      {
        socials.map((item, index) => {
          return (
            <Link key={index} href={item.path} className={iconStyles}>
              {item.icon}
            </Link>
          )
        })
      }

    </div>
  )
}

export default Social