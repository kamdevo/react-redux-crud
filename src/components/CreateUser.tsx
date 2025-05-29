import { Badge, Button, Card, TextInput, Title } from "@tremor/react";
import { useUserActions } from "../hooks/useUserActions";
import { useState } from "react";

// Definir la interfaz de props
interface CreateUserProps {
  onClose: () => void;
}

export const CreateUser = ({ onClose }: CreateUserProps) => {
  const { handleAddUser } = useUserActions();

  const [result, setResult] = useState<"ok" | "ko" | null>();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setResult(null); // Reset result state on form submission

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const github = formData.get("github") as string;

    if (!name || !email || !github) {
      return setResult("ko");
    }

    handleAddUser({ name, email, github });
    setResult("ok");
    form.reset(); // Reset the form fields after submissions
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <Card className="max-w-md space-y-2 ">
        <div className="header flex justify-between">
          <Title>Create new User</Title>
          <span onClick={onClose} className="text-gray-500 text-xl">
            x
          </span>
        </div>
        <form onSubmit={handleSubmit} className="p-2 space-y-4" action="">
          <TextInput name="name" placeholder="Name here" />
          <TextInput name="email" placeholder="Email here" />
          <TextInput name="github" placeholder="Github user here" />
          <Button type="submit">Create</Button>
          <span className="ml-2">
            {result === "ok" && (
              <Badge color="green">Guardado correctamente</Badge>
            )}
            {result === "ko" && <Badge color="red">Problema con campos</Badge>}
          </span>
        </form>
      </Card>
    </div>
  );
};
