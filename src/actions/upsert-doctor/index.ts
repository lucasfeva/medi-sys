"use server";

import { headers } from "next/headers";

import { db } from "@/db";
import { doctorsTable } from "@/db/schema";
import { auth } from "@/lib/auth";
import { actionClient } from "@/lib/safe-action";

import { upsertDoctorSchema } from "./schema";

export const upsertDoctor = actionClient
  .schema(upsertDoctorSchema)
  .action(async ({ parsedInput }) => {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user) {
      throw new Error("unauthorized");
    }

    if (!session?.user.clinic?.id) {
      throw new Error("Clinic not found");
    }

    await db
      .insert(doctorsTable)
      .values({
        id: parsedInput.id,
        clinicId: session.user.clinic.id,
        name: parsedInput.name,
        specialty: parsedInput.specialty,
        appointmentPriceInCents: parsedInput.appointmentPriceInCents,
        availableFromWeekday: parsedInput.availableFromWeekDay,
        availableToWeekday: parsedInput.availableToWeekDay,
        availableFromTime: parsedInput.availableFromTime,
        availableToTime: parsedInput.availableToTime,
      })
      .onConflictDoUpdate({
        target: [doctorsTable.id],
        set: {
          name: parsedInput.name,
          specialty: parsedInput.specialty,
          appointmentPriceInCents: parsedInput.appointmentPriceInCents,
          availableFromWeekday: parsedInput.availableFromWeekDay,
          availableToWeekday: parsedInput.availableToWeekDay,
          availableFromTime: parsedInput.availableFromTime,
          availableToTime: parsedInput.availableToTime,
        },
      });
  });
