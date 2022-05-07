const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

(async function main() {
  try {
    const woopa = await prisma.explorer.upsert({
      where: { name: "Woopa" },
      update: {},
      create: {
        name: "Woopa",
        username: "ajolonauta",
        mission: "Node",
      },
    });

    const woopa1 = await prisma.explorer.upsert({
      where: { name: "Woopa1" },
      update: {},
      create: {
        name: "Woopa1",
        username: "ajolonauta1",
        mission: "Node",
      },
    });

    const woopa2 = await prisma.explorer.upsert({
      where: { name: "Woopa 2" },
      update: {},
      create: {
        name: "Woopa 2",
        username: "ajolonauta2",
        mission: "Java",
      },
    });

    const woopa3 = await prisma.explorer.upsert({
      where: { name: "Woopa 3" },
      update: {},
      create: {
        name: "Woopa 3",
        username: "ajolonauta3",
        mission: "Node",
      },
    });

    console.log("Create 3 explorers");

    const woopa_mession = await prisma.explorer_mission.upsert({
      where: { name: "Woopa" },
      update: {},
      create: {
        name: "Woopa",
        lang: "Node",
        missionCommander: "Carlo",
        enrollments: 2,
      },
    });

    const woopa1_mission = await prisma.explorer_mission.upsert({
      where: { name: "Woopa1" },
      update: {},
      create: {
        name: "Woopa1",
        lang: "Java",
        missionCommander: "Fernanda",
        enrollments: 1,
      },
    });

    const woopa2_mission = await prisma.explorer_mission.upsert({
      where: { name: "Woopa2" },
      update: {},
      create: {
        name: "Woopa2",
        lang: "Node",
        missionCommander: "Carlo",
        enrollments: 2,
      },
    });

    const missionCommander = await prisma.missionCommander.upsert({
      where: { name: "Carlo" },
      update: {},
      create: {
        name: "Carlo",
        username: "MCCarlo",
        mainStack: "Node",
      },
    });

    const missionCommander1 = await prisma.missionCommander.upsert({
      where: { name: "Fernanda" },
      update: {},
      create: {
        name: "Fernanda",
        username: "MCFernanda",
        mainStack: "Java",
      },
    });

    const missionCommander2 = await prisma.missionCommander.upsert({
      where: { name: "Rodrigo" },
      update: {},
      create: {
        name: "Rodrigo",
        username: "MCRodrigo",
        mainStack: "Vue",
      },
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();
