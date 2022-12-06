import Link from "next/link"

const navbar = () => {
  return (
    <>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="./posts">Post</Link>
        </li>
      </ul>
    </>
  )
}

export default navbar
