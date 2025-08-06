const { PrismaClient } = require('./generated/prisma')

const prisma = new PrismaClient()

async function main() {
    await prisma.user.create({
    data: {
      name: 'pratu',
      email: 'pratu@prisma.io',
      posts: {
        create: { title: 'Hello World',
            newContent: 'nyaaa content'
         },
      },
      profile: {
        create: { bio: 'I like cricket' },
      },
    },
  })

  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
    },
  })
  console.log(allUsers);
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })