import prisma from "../src/database/prismaClient";

const contacts = [
  {
    id: 1,
    firstName: "Eric",
    lastName: "Elliot",
    phoneNumber: "2225556575",
  },
  {
    id: 2,
    firstName: "Steve",
    lastName: "Jobs",
    phoneNumber: "2204546754",
  },
  {
    id: 3,
    firstName: "Fred",
    lastName: "Allen",
    phoneNumber: "2106579886",
  },
  {
    id: 4,
    firstName: "Steve",
    lastName: "Wozniak",
    phoneNumber: "3436758786",
  },
  {
    id: 5,
    firstName: "Bill",
    lastName: "Gates",
    phoneNumber: "3436549688",
  },
  {
    id: 6,
    firstName: "Rubens",
    lastName: "Rojas",
    phoneNumber: "5521965400174",
  },
];

async function main() {
  for (const contact of contacts) {
    await prisma.contact.create({
      data: contact,
    })
  }
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