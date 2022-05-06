-- CreateTable
CREATE TABLE "Explorer_mission" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lang" VARCHAR(255) NOT NULL,
    "missionCommander" VARCHAR(255) NOT NULL,
    "enrollments" INTEGER NOT NULL,
    "hasCertification" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Explorer_mission_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Explorer_mission_name_key" ON "Explorer_mission"("name");
