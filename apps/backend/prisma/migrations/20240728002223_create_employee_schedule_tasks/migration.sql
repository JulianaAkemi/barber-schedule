-- CreateTable
CREATE TABLE "employee" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "score" DOUBLE PRECISION NOT NULL,
    "qtyScore" INTEGER NOT NULL,

    CONSTRAINT "employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "task" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "slots" INTEGER NOT NULL,
    "imageURL" TEXT NOT NULL,

    CONSTRAINT "task_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "schedule" (
    "id" SERIAL NOT NULL,
    "clientEmail" TEXT NOT NULL,
    "date" TIMESTAMPTZ(3) NOT NULL,
    "employeeId" INTEGER NOT NULL,

    CONSTRAINT "schedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ScheduleToTask" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "employee_name_key" ON "employee"("name");

-- CreateIndex
CREATE UNIQUE INDEX "task_name_key" ON "task"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_ScheduleToTask_AB_unique" ON "_ScheduleToTask"("A", "B");

-- CreateIndex
CREATE INDEX "_ScheduleToTask_B_index" ON "_ScheduleToTask"("B");

-- AddForeignKey
ALTER TABLE "schedule" ADD CONSTRAINT "schedule_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ScheduleToTask" ADD CONSTRAINT "_ScheduleToTask_A_fkey" FOREIGN KEY ("A") REFERENCES "schedule"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ScheduleToTask" ADD CONSTRAINT "_ScheduleToTask_B_fkey" FOREIGN KEY ("B") REFERENCES "task"("id") ON DELETE CASCADE ON UPDATE CASCADE;
