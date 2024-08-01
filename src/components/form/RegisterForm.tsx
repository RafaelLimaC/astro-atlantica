import { useForm as useFormspree } from "@formspree/react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Input } from "../input/Input";
import { NumericInput } from "../input/NumericInput";
import { PatternInput } from "../input/PatternInput";

export default function RegisterForm() {
  const [serverState, sendToFormspree] = useFormspree(
    import.meta.env.PUBLIC_FORMSPREE_ID!,
  );
  const { register, handleSubmit } = useForm();

  if (serverState.succeeded) {
    toast("Formulário Enviado");
  }

  return (
    <div className="mb-36 mt-[3.75rem] flex w-full max-w-[62rem] flex-col">
      <form onSubmit={handleSubmit(sendToFormspree)}>
        <h3 className="mb-[1.25rem] text-2xl font-bold uppercase">
          Dados da empresa
        </h3>

        <div className="grid grid-cols-1 gap-[0.625rem] md:grid-cols-3">
          <Input
            label="Razão Social"
            id="razaoSocial"
            name="razaoSocial"
            labelFor="razaoSocial"
            required
            {...register("razaoSocial", { required: true })}
          />

          <Input
            label="Nome Fantasia"
            labelFor="empresa-nomeFantasia"
            id="empresa-nomeFantasia"
            name="empresa-nomeFantasia"
            required
            {...register("empresa-nomeFantasia", { required: true })}
          />

          <Input
            label="Ramo de atividade"
            name="empresa-ramoDeAtividade"
            id="empresa-ramoDeAtividade"
            labelFor="empresa-ramoDeAtividade"
            required
            {...register("empresa-ramoDeAtividade", { required: true })}
          />
        </div>

        <div className="mt-[1.25rem] grid grid-cols-1 gap-[0.625rem] md:grid-cols-9">
          <NumericInput
            maxLength={14}
            label="CNPJ da Empresa"
            labelFor="empresa-CNPJ"
            id="empresa-CNPJ"
            name="empresa-CNPJ"
            className="col-auto md:col-span-3"
            {...register("empresa-CNPJ", { required: true })}
            required
          />

          <Input
            label="Endereço completo"
            className="col-auto md:col-span-6"
            labelFor="empresa-endereco"
            id="empresa-endereco"
            name="empresa-endereco"
            {...register("empresa-endereco", { required: true })}
            required
          />
        </div>

        <div className="mt-[1.25rem] grid grid-cols-1 gap-[0.625rem] md:grid-cols-4">
          <Input
            label="Bairro"
            labelFor="empresa-bairro"
            id="empresa-bairro"
            name="empresa-bairro"
            {...register("empresa-bairro")}
          />

          <Input
            label="Estado"
            labelFor="empresa-estado"
            id="empresa-estado"
            name="empresa-estado"
            {...register("empresa-estado")}
          />

          <Input
            label="Cidade"
            labelFor="empresa-cidade"
            id="empresa-cidade"
            name="empresa-cidade"
            {...register("empresa-cidade")}
          />

          <PatternInput
            format="#####-###"
            label="CEP"
            labelFor="empresa-cep"
            id="empresa-cep"
            name="empresa-cep"
            {...register("empresa-cep")}
          />
        </div>

        <div className="mt-[1.25rem] grid grid-cols-1 gap-[0.625rem] md:grid-cols-4">
          <PatternInput
            format="(##) #####-####"
            label="Celular"
            labelFor="empresa-celular"
            id="empresa-celular"
            name="empresa-celular"
            {...register("empresa-celular", { required: true })}
            required
          />

          <PatternInput
            format="(##) #####-####"
            label="Telefone"
            labelFor="empresa-telefone"
            id="empresa-telefone"
            name="empresa-telefone"
            {...register("empresa-telefone", { required: true })}
            required
          />

          <PatternInput
            format="(##) #####-####"
            label="WhatsApp"
            labelFor="empresa-whatsapp"
            id="empresa-whatsapp"
            name="empresa-whatsapp"
            {...register("empresa-whatsapp", { required: true })}
            required
          />

          <PatternInput
            format="(##) #####-####"
            label="Outro"
            labelFor="empresa-outro"
            id="empresa-outro"
            name="empresa-outro"
            {...register("empresa-outro")}
          />
        </div>

        <h3 className="mb-[1.313rem] mt-[2.5rem] text-2xl font-bold uppercase">
          Dados do comprador
        </h3>

        <div className="mt-[1.25rem] grid grid-cols-1 gap-[0.625rem] md:grid-cols-9">
          <Input
            label="Nome do comprador"
            className="col-auto md:col-span-4"
            labelFor="comprador-nome"
            id="comprador-nome"
            name="comprador-nome"
            {...register("comprador-nome", { required: true })}
            required
          />

          <PatternInput
            format="(##) #####-####"
            label="Celular"
            className="col-auto md:col-span-2"
            labelFor="comprador-celular"
            id="comprador-celular"
            name="comprador-celular"
            {...register("comprador-celular", { required: true })}
            required
          />

          <Input
            label="E-mail compras"
            type="email"
            className="col-auto md:col-span-3"
            labelFor="comprador-email"
            id="comprador-email"
            name="comprador-email"
            {...register("comprador-email", { required: true })}
            required
          />
        </div>

        <div className="mt-[1.25rem] grid grid-cols-1 gap-[0.625rem] md:grid-cols-9">
          <Input
            label="Nome do Responsável Financeiro"
            className="col-auto md:col-span-4"
            labelFor="comprador-responsavelNome"
            id="comprador-responsavelNome"
            name="comprador-responsavelNome"
            {...register("comprador-responsavelNome", { required: true })}
            required
          />

          <PatternInput
            format="(##) #####-####"
            label="Celular"
            className="col-auto md:col-span-2"
            labelFor="comprador-responsavelCelular"
            id="comprador-responsavelCelular"
            name="comprador-responsavelCelular"
            {...register("comprador-responsavelCelular", { required: true })}
            required
          />

          <Input
            label="E-mail compras"
            type="email"
            className="col-auto md:col-span-3"
            labelFor="comprador-responsavelEmail"
            id="comprador-responsavelEmail"
            name="comprador-responsavelEmail"
            {...register("comprador-responsavelEmail", { required: true })}
            required
          />
        </div>

        <div className="mt-[1.25rem] grid grid-cols-1 gap-[0.625rem] md:grid-cols-2">
          <Input
            label="E-mail Financeiro"
            type="email"
            labelFor="comprador-emailFinanceiro"
            id="comprador-emailFinanceiro"
            name="comprador-emailFinanceiro"
            {...register("comprador-emailFinanceiro", { required: true })}
            required
          />

          <Input
            label="E-mail envio XML/NF"
            type="email"
            labelFor="comprador-emailXML"
            id="comprador-emailXML"
            name="comprador-emailXML"
            {...register("comprador-emailXML", { required: true })}
            required
          />
        </div>

        <div className="mt-[1.25rem] grid grid-cols-1 gap-[1.875rem] md:grid-cols-5">
          <Input
            label="Período de Fechamento Fiscal"
            className="col-auto md:col-span-2"
            labelFor="comprador-periodoFechamento"
            id="comprador-periodoFechamento"
            name="comprador-periodoFechamento"
            {...register("comprador-periodoFechamento", { required: true })}
            required
          />

          <div className="col-auto flex flex-col md:items-center md:flex-row gap-1 text-gray8b md:col-span-3 md:gap-[2.375rem]">
            <p className="text-sm">
              Metodo de Pagamento<span className="text-sm text-red-500">*</span>
              :
            </p>
            {/* [TODO] */}
            <div className="flex items-center gap-[0.875rem]">
              <input
                type="radio"
                name="metodoDePagamento"
                className="scale-150 accent-lightBlue"
                {...register("comprador-metodoDePagamento", { required: true })}
                required
              />
              <label>Boleto</label>
            </div>

            <div className="flex items-center gap-[0.875rem]">
              <input
                type="radio"
                name="metodoDePagamento"
                className="scale-150 accent-lightBlue"
                {...register("comprador-metodoDePagamento", { required: true })}
                required
              />
              <label>Transferência</label>
            </div>

            <div className="flex items-center gap-[0.875rem]">
              <input
                type="radio"
                name="metodoDePagamento"
                className="scale-150 accent-lightBlue"
                {...register("comprador-metodoDePagamento", { required: true })}
                required
              />
              <label>PIX</label>
            </div>
          </div>
        </div>

        <div className="mt-[1.25rem] grid grid-cols-1">
          <Input
            label="Prazo (Análise junto ao Financeiro)"
            id="comprador-prazo"
            labelFor="comprador-prazo"
            name="comprador-prazo"
            {...register("comprador-prazo", { required: true })}
            required
          />
        </div>

        <h3 className="mb-[1.313rem] mt-[2.5rem] text-2xl font-bold uppercase">
          Dados de Recebimento
        </h3>

        <div className="mt-[1.25rem] grid grid-cols-1 gap-[0.625rem] md:grid-cols-6">
          <Input
            className="col-auto md:col-span-4"
            label="Nome do Responsável"
            labelFor="recebimento-nomeResponsavel"
            id="recebimento-nomeResponsavel"
            name="recebimento-nomeResponsavel"
            {...register("recebimento-nomeReponsavel", { required: true })}
            required
          />

          <PatternInput
            format="(##) #####-####"
            className="col-auto md:col-span-2"
            label="Telefone"
            labelFor="recebimento-telefoneResponsavel"
            id="recebimento-telefoneResponsavel"
            name="recebimento-telefoneResponsavel"
            {...register("recebimento-telefoneResponsavel", { required: true })}
            required
          />
        </div>

        <div className="mt-[1.25rem] grid grid-cols-1 gap-[0.625rem] md:grid-cols-2">
          <Input
            label="Dias de Recebimento"
            labelFor="recebimento-dias"
            id="recebimento-dias"
            name="recebiment-dias"
            {...register("recebimento-dias")}
          />
          <Input
            label="Horários de Recebimento"
            labelFor="recebimento-horarios"
            id="recebimento-horarios"
            name="recebimento-horarios"
            {...register("recebimento-horarios")}
          />
        </div>

        <div className="mt-[1.25rem] grid grid-cols-1 gap-[0.625rem]">
          <Input
            label="Endereço de Entrega"
            labelFor="recebimento-endereco"
            id="recebimento-endereco"
            name="recebimento-endereco"
            {...register("recebimento-endereco", { required: true })}
            required
          />
        </div>

        <div className="mt-[1.25rem] grid grid-cols-1 gap-[0.625rem] md:grid-cols-4">
          <Input
            label="Bairro"
            labelFor="recebimento-bairro"
            id="recebimento-bairro"
            {...register("recebimento-bairro")}
          />

          <Input
            label="Estado"
            labelFor="recebimento-estado"
            id="recebimento-estado"
            {...register("recebimento-estado")}
          />

          <Input
            label="Cidade"
            labelFor="recebimento-cidade"
            id="recebimento-cidade"
            {...register("recebimento-cidade")}
          />

          <Input
            label="CEP"
            labelFor="recebimento-cep"
            id="recebimento-cep"
            name="recebimento-cep"
            {...register("recebimento-cep")}
          />
        </div>

        <h3 className="mb-[1.313rem] mt-[2.5rem] text-2xl font-bold uppercase">
          REFERÊNCIAS COMERCIAIS
        </h3>

        <div className="mt-[1.25rem] grid grid-cols-1 gap-[0.625rem] md:grid-cols-5">
          <Input
            label="Empresa 1"
            className="col-auto md:col-span-3"
            id="referencias-empresa1"
            labelFor="referencias-empresa1"
            name="referencias-empresa1"
            {...register("referencias-empresa1")}
          />
          <Input
            label="Contato"
            className="col-auto md:col-span-2"
            id="referencias-contato1"
            labelFor="referencias-contato1"
            name="referencias-contato1"
            {...register("referencias-contato1")}
          />
        </div>

        <div className="mt-[1.25rem] grid grid-cols-1">
          <Input
            label="Endereço"
            id="referencias-endereco1"
            labelFor="referencias-endereco1"
            name="referencias-endereco1"
            {...register("referencias-endereco1")}
          />
        </div>

        <div className="mt-[1.25rem] grid grid-cols-1 gap-[0.625rem] md:grid-cols-4">
          <Input
            label="Bairro"
            id="referencias-bairro1"
            labelFor="referencias-bairro1"
            name="referencias-bairro1"
            {...register("referencias-bairro1")}
          />

          <Input
            label="Estado"
            id="referencias-estado1"
            labelFor="referencias-estado1"
            name="referencias-estado1"
            {...register("referencias-estado1")}
          />

          <Input
            label="Cidade"
            id="referencias-cidade1"
            labelFor="referencias-cidade1"
            name="referencias-cidade1"
            {...register("referencias-cidade1")}
          />

          <PatternInput
            format="#####-###"
            label="CEP"
            id="referencias-cep1"
            labelFor="referencias-cep1"
            name="referencias-cep1"
            {...register("referencias-cep1")}
          />
        </div>

        <div className="mt-[1.25rem] grid grid-cols-1 gap-[0.625rem] md:grid-cols-5">
          <Input
            label="Empresa 2"
            className="col-auto md:col-span-3"
            id="referencias-empresa2"
            labelFor="referencias-empresa2"
            name="referencias-empresa2"
            {...register("referencias-empresa2")}
          />

          <Input
            label="Contato"
            className="col-auto md:col-span-2"
            id="referencias-contato2"
            labelFor="referencias-contato2"
            name="referencias-contato2"
            {...register("referencias-contato2")}
          />
        </div>

        <div className="mt-[1.25rem] grid grid-cols-1">
          <Input
            label="Endereço"
            id="referencias-endereco2"
            labelFor="referencias-endereco2"
            name="referencias-endereco2"
            {...register("referencias-endereco2")}
          />
        </div>

        <div className="mt-[1.25rem] grid grid-cols-1 gap-[0.625rem] md:grid-cols-4">
          <Input
            label="Bairro"
            id="referencias-bairro2"
            labelFor="referencias-bairro2"
            name="referencias-bairro2"
            {...register("referencias-bairro2")}
          />

          <Input
            label="Estado"
            id="referencias-estado2"
            labelFor="referencias-estado2"
            name="referencias-estado2"
            {...register("referencias-estado2")}
          />

          <Input
            label="Cidade"
            id="referencias-cidade2"
            labelFor="referencias-cidade2"
            name="referencias-cidade2"
            {...register("referencias-cidade2")}
          />

          <PatternInput
            label="CEP"
            format="#####-###"
            id="referencias-cep2"
            labelFor="referencias-cep2"
            name="referencias-cep2"
            {...register("referencias-cep2")}
          />
        </div>

        <h3 className="mb-[1.313rem] mt-[2.5rem] text-2xl font-bold uppercase">
          Contatos
        </h3>

        <div className="mt-[1.25rem] grid grid-cols-1 gap-[0.625rem] md:grid-cols-9">
          <Input
            label="Responsável - Dept. Comercial"
            className="col-auto md:col-span-4"
            id="contatos-responsavelComercial"
            labelFor="contatos-responsavelComercial"
            name="contatos-responsavelComercial"
            {...register("contatos-responsavelComercial", { required: true })}
            required
          />

          <Input
            label="Celular"
            className="col-auto md:col-span-2"
            id="contatos-celularComercial"
            labelFor="contatos-celularComercial"
            name="contatos-celularComercial"
            {...register("contatos-celularComercial", { required: true })}
            required
          />

          <Input
            label="E-mail"
            type="email"
            className="col-auto md:col-span-3"
            id="contatos-emailComercial"
            labelFor="contatos-emailComercial"
            name="contatos-emailComercial"
            {...register("contatos-emailComercial", { required: true })}
            required
          />
        </div>

        <div className="mt-[1.25rem] grid grid-cols-1 gap-[0.625rem] md:grid-cols-9">
          <Input
            label="Responsável - Dept. Financeiro"
            className="col-auto md:col-span-4"
            id="contatos-responsavelFinanceiro"
            labelFor="contatos-responsavelFinanceiro"
            name="contatos-responsavelFinanceiro"
            {...register("contatos-responsavelFinanceiro", { required: true })}
            required
          />
          <Input
            label="Celular"
            className="col-auto md:col-span-2"
            id="contatos-celularFinanceiro"
            labelFor="contatos-celularFinanceiro"
            name="contatos-celularFinanceiro"
            {...register("contatos-celularFinanceiro", { required: true })}
            required
          />
          <Input
            label="E-mail"
            type="email"
            className="col-auto md:col-span-3"
            id="contatos-emailFinanceiro"
            labelFor="contatos-emailFinanceiro"
            name="contatos-emailFinanceiro"
            {...register("contatos-emailFinanceiro", { required: true })}
            required
          />
        </div>

        <div className="mt-[1.25rem] grid grid-cols-1 gap-[0.625rem] md:grid-cols-9">
          <Input
            label="Responsável Técnico"
            className="col-auto md:col-span-4"
            id="contatos-responsavelTecnico"
            labelFor="contatos-responsavelTecnico"
            name="contatos-responsavelTecnico"
            {...register("contatos-responsavelTecnico", { required: true })}
            required
          />

          <Input
            label="Celular"
            className="col-auto md:col-span-2"
            id="contatos-celularTecnico"
            labelFor="contatos-celularTecnico"
            name="contatos-celularTecnico"
            {...register("contatos-celularTecnico", { required: true })}
            required
          />

          <Input
            label="E-mail"
            type="email"
            className="col-auto md:col-span-3"
            id="contatos-emailTecnico"
            labelFor="contatos-emailTecnico"
            name="contatos-emailTecnico"
            {...register("contatos-emailTecnico", { required: true })}
            required
          />
        </div>

        <div className="mt-[1.875rem] flex items-start gap-4">
          <input
            type="checkbox"
            className="scale-150 accent-lightBlue"
            required
          />

          <p className="overflow-x-scroll overflow-y-hidden">
            <span className="font-bold text-[#e63838]">ATENÇÃO!</span> Estou
            ciente de que para completar o meu cadastro de cliente deverão ser
            enviadas cópias de todos os documentos para o e-mail
            docs@distribuidoraatlantico.com.br: Cartão CNPJ, Inscrição Estadual,
            Licença Sanitária, Alvará Municipal, AFEs, Certidão de
            Responsabilidade Técnica (CRF) e Contrato Social. Além dos seguintes
            documentos adicionais para empresas offshore: Certificado de
            Controle Sanitário de Bordo (CCSB) ou Certificado de isenção,
            Declaração Marítima de Saúde e Identificação do Médico do Trabalho
            Responsável pela Empresa.
          </p>
        </div>

        <div className="mt-[1.25rem] flex justify-center">
          <button
            className="w-full max-w-[20rem] rounded-[1.688rem] bg-lightBlue py-[0.875rem] text-base text-white"
            type="submit"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
