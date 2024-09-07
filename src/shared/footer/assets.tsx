/**
 * v0 by Vercel.
 * @see https://v0.dev/t/riLGbISwGLA
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Component() {
  return (
    <footer className="bg-muted py-8 md:py-12">
      <div className="container flex flex-col items-center gap-4 md:flex-row md:justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-md bg-secondary px-4 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            prefetch={false}
          >
            <TextIcon className="mr-2 h-5 w-5" />
            Reach out on Telegram
          </Link>
          <Link
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-md bg-secondary px-4 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            prefetch={false}
          >
            <MailIcon className="mr-2 h-5 w-5" />
            Send me an email
          </Link>
          <Link
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-md bg-secondary px-4 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            prefetch={false}
          >
            <InstagramIcon className="mr-2 h-5 w-5" />
            Follow on Instagram
          </Link>
          <Link
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-md bg-secondary px-4 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            prefetch={false}
          >
            <LinkedinIcon className="mr-2 h-5 w-5" />
            Connect on LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  )
}

function InstagramIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function LinkedinIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function MailIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function TextIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 6.1H3" />
      <path d="M21 12.1H3" />
      <path d="M15.1 18H3" />
    </svg>
  )
}