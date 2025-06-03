import FormDialog from "@/components/clinic-form/form-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
export default function ClinicFormPage() {
  return (
    <Dialog open>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Adicionar Clinica</DialogTitle>
          <DialogDescription>
            Preencha os dados da clinica para que possa ser adicionada ao seu
            perfil.
          </DialogDescription>
        </DialogHeader>
        <FormDialog />
      </DialogContent>
    </Dialog>
  );
}
