import {clerkMiddleware, createRouteMatcher} from '@clerk/nextjs/server'
import {publicRoutes} from './constants'

const isPublicRoute = createRouteMatcher(publicRoutes)

export default clerkMiddleware((auth, req) => {
  if (!isPublicRoute(req)) auth().protect()
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
