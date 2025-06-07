"use client";

import { Plus } from "lucide-react";

import { Button } from "../ui/button";
import { Dialog, DialogTrigger } from "../ui/dialog";
import UpsertDoctorForm from "./upsert-doctor-form";

export default function AddDoctorButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Plus />
          Adicionar médico
        </Button>
      </DialogTrigger>
      <UpsertDoctorForm />
    </Dialog>
  );
}
