import { useForm } from "@formspree/react";
import { Input } from "../input/Input";
import EnterpriseDataForm from "./enterprise-data-form";

export default function RegisterForm() {
  const [state, handleSubmit] = useForm("xldrdvrz");

  if (state.succeeded) {
    console.log("fodase");
  }

  return (
    <div className="mb-36 mt-[3.75rem] flex w-full max-w-[62rem] flex-col">
      <form
        onSubmit={handleSubmit}
        action="https://formspree.io/f/xldrdvrz"
        method="POST"
      >
        <h3 className="mb-[1.25rem] text-2xl font-bold uppercase">
          Dados da empresa
        </h3>

        <div className="grid grid-cols-1 gap-[0.625rem] md:grid-cols-3">
          <Input label="Razão Social" id="razaoSocial" name="razaoSocial" />
          <Input
            label="Nome Fantasia"
            labelFor="nomeFantasia"
            id="nomeFantasia"
            name="nomeFantasia"
          />
          <Input
            label="Ramo de atividade"
            name="ramoDeAtividade"
            id="ramoDeAtividade"
            labelFor="ramoDeAtividade"
          />
        </div>

        <div className="mt-[1.25rem] grid grid-cols-1 gap-[0.625rem] md:grid-cols-9">
          <Input
            label="CNPJ"
            labelFor="CPNJ"
            id="CPNJ"
            name="CPNJ"
            className="col-auto md:col-span-3"
          />
          <Input
            label="Endereço completo"
            className="col-auto md:col-span-6"
            labelFor="endereco"
            id="endereco"
            name="endereco"
          />
        </div>

        <div className="mt-[1.25rem] grid grid-cols-1 gap-[0.625rem] md:grid-cols-4">
          <Input label="Bairro" />
          <Input label="Estado" />
          <Input label="Cidade" />
          <Input label="CEP" />
        </div>

        <div className="mt-[1.25rem] grid grid-cols-1 gap-[0.625rem] md:grid-cols-4">
          <Input label="Celular" />
          <Input label="Telefone" />
          <Input label="WhatsApp" />
          <Input label="Outro" />
        </div>

        <h3 className="mb-[1.313rem] mt-[2.5rem] text-2xl font-bold uppercase">
          Dados do comprador
        </h3>

        <div className="mt-[1.25rem] grid grid-cols-1 gap-[0.625rem] md:grid-cols-9">
          <Input label="Nome do comprador" className="col-span-4" />
          <Input label="Celular" className="col-span-2" />
          <Input label="E-mail compras" className="col-span-3" />
        </div>

        <div className="mt-[1.25rem] grid grid-cols-1 gap-[0.625rem] md:grid-cols-9">
          <Input
            label="Nome do Responsável Financeiro"
            className="col-span-4"
          />
          <Input label="Celular" className="col-span-2" />
          <Input label="E-mail compras" className="col-span-3" />
        </div>

        <div className="mt-[1.25rem] grid grid-cols-1 gap-[0.625rem] md:grid-cols-2">
          <Input label="E-mail Financeiro" />
          <Input label="E-mail envio XML/NF" />
        </div>

        <div className="mt-[1.25rem] grid grid-cols-1 gap-[1.875rem] md:grid-cols-5">
          <Input label="Período de Fechamento Fiscal" className="col-span-2" />

          <div className="text-gray8b col-span-3 flex items-center gap-[2.375rem]">
            <p className="text-sm">Metodo de Pagamento</p>
            <div className="flex items-center gap-[0.875rem]">
              <input type="radio" name="metodoDePagamento" />
              <label>Boleto</label>
            </div>

            <div className="flex items-center gap-[0.875rem]">
              <input type="radio" name="metodoDePagamento" />
              <label>Transferência</label>
            </div>

            <div className="flex items-center gap-[0.875rem]">
              <input type="radio" name="metodoDePagamento" />
              <label>PIX</label>
            </div>
          </div>
        </div>

        <div className="mt-[1.25rem] grid grid-cols-1">
          <Input label="Prazo (Análise junto ao Financeiro)" />
        </div>

        <h3 className="mb-[1.313rem] mt-[2.5rem] text-2xl font-bold uppercase">
          REFERÊNCIAS COMERCIAIS
        </h3>
        <div className="mt-[1.25rem] grid grid-cols-1 gap-[0.625rem] md:grid-cols-5">
          <Input label="Empresa 1" className="col-span-3" />
          <Input label="Contato" className="col-span-2" />
        </div>
      </form>
    </div>
  );
}
