# otakus-list

Exploring React Server Components and Server Actions with Next.js

Largely Based on this guide

https://www.antstack.com/blog/exploring-react-server-components-and-server-actions-with-next-js/

Update to Next 14.0.3

Latest Prisma

"prisma": "^5.6.0"
"@prisma/client": "^5.6.0"

And if you are stuggling with SSL Required

You need to add this to the end of your PlanetScale DB's connection String

?sslaccept=strict

Remove anything else at the end of the string and just add that 

Usually in you .env file

DATABASE_URL=
