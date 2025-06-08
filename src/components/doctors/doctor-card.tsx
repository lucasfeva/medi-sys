"use client";

import { Calendar, Clock, DollarSign } from "lucide-react";

import type { doctorsTable } from "@/db/schema";
import { getAvailability } from "@/helpers/availability";
import { formatCurrencyInCents } from "@/helpers/currency";

import { Avatar, AvatarFallback } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { Separator } from "../ui/separator";
import UpsertDoctorForm from "./upsert-doctor-form";

interface DoctorCardProps {
  doctor: typeof doctorsTable.$inferInsert;
}

export default function DoctorCard({ doctor }: DoctorCardProps) {
  const doctorInitials = doctor.name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .slice(0, 2)
    .join("");

  const availability = getAvailability(doctor);
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Avatar className="size-12">
            <AvatarFallback>{doctorInitials}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-sm font-medium">{doctor.name}c</h3>
            <p className="text-muted-foreground text-sm">{doctor.specialty}</p>
          </div>
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="flex flex-col gap-2">
        <Badge variant="ghost">
          <Calendar className="mr-1" />
          {availability.from.format("dddd")} a {availability.to.format("dddd")}
        </Badge>
        <Badge variant="ghost">
          <Clock className="mr-1" />
          {availability.from.format("HH:mm")} as{" "}
          {availability.to.format("HH:mm")}
        </Badge>
        <Badge variant="ghost">
          <DollarSign className="mr-1" />
          {formatCurrencyInCents(doctor.appointmentPriceInCents)}
        </Badge>
      </CardContent>
      <Separator />
      <CardFooter>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full">Ver detalhes</Button>
          </DialogTrigger>
          <UpsertDoctorForm />
        </Dialog>
      </CardFooter>
    </Card>
  );
}
