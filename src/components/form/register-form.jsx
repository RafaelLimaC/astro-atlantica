import { Input } from "../input/Input";

export default function RegisterForm() {
  return (
    <div className="mt-[3.75rem] flex w-full max-w-[62rem] flex-col">
      <h3 className="mb-[1.25rem] text-2xl font-bold">Dados da empresa</h3>

      <div className="grid grid-cols-1 gap-[0.625rem] md:grid-cols-3">
        <Input label="Razão Social" />
        <Input label="Nome Fantasia" />
        <Input label="Ramo de atividade" />
      </div>

      <div className="grid grid-cols-1 gap-[0.625rem] md:grid-cols-9 mt-[1.25rem]">
        <Input label="CNPJ" labelFor="CPNJ" id="CPNJ" className="col-auto md:col-span-3" />
        <Input label="Endereço completo" className="col-auto md:col-span-6" labelFor="address" id="address" />
      </div>
    </div>
  );
}
