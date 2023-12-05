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

Planet Scale Defaults to this

?ssl={"rejectUnauthorized":true}'

Remove that and just add ?sslaccept=strict

In you .env file

DATABASE_URL=

Once that is setup run this from cli

# npx prisma db push

If all is OK you should see this

Environment variables loaded from .env
Prisma schema loaded from prisma/schema.prisma
Datasource "db": MySQL database "otakulist" at "aws.connect.psdb.cloud"

The database is already in sync with the Prisma schema.

✔ Generated Prisma Client (v5.6.0) to ./node_modules/@prisma/client in 430ms