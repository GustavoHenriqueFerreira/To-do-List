import "./style.css"
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Tarefa from "../../components/Tarefa";

interface Tarefa {
    nome: string,
    concluido: string,
}

const schema = z.object({
    nome: z.string().min(5, "Por favor, digite o nome com mais de 5 caracteres").max(40, "Por favor, digite o nome com menos de 40 caracteres"),
    concluido: z.boolean(),
})

type FormProps = z.infer<typeof schema>

function Home() {
    const [tarefa, setTarefa] = useState<Tarefa>(Object)
    const [enviado, setEnviado] = useState<boolean>(false)
    const [listaTarefa, setListaTarefa] = useState<any[]>([])
    const [listaConteudo, setListaConteudo] = useState<boolean>(true)
    const { handleSubmit, register, formState: { errors } } = useForm<FormProps>({
        mode: "all",
        reValidateMode: 'onChange',
        criteriaMode: 'all',
        resolver: zodResolver(schema),
        defaultValues: {
            nome: "",
            concluido: false
        }
    });

    function fazerCadastro(event: any) {
        event.preventDefault();

        setListaTarefa([...listaTarefa, { nome: tarefa.nome, id: Math.floor(Math.random()), concluido: tarefa.concluido }])
        setEnviado(true)
        setTimeout(function () { setEnviado(false); }, 2000)
    }

    function listarTarefas() {
        setListaTarefa([{
            nome: "Tarefa 1- Teste",
            concluido: false,
            id: 0,
        }, {
            nome: "Tarefa 2- Teste",
            concluido: true,
            id: 1,
        },
        {
            nome: "Tarefa 3- Teste",
            concluido: false,
            id: 2,
        }])
    }


    useEffect(() => {
        listarTarefas();
    }, []);


    return (
        <main>
            <section className="container margin_container">
                <div className="direction_row space_between width_100">

                    <form method="POST" onSubmit={fazerCadastro} className="gap width_100 space_between direction_row gap_tarefas_titulo">
                        <div className="width_75">
                            <input {...register("nome")} id="nome_tarefa" onChange={(event) => setTarefa({ ...tarefa, nome: event.target.value })} className="width_100 input_tarefa" type="text" placeholder="Escreva o que deseja fazer..." />
                            <p className="erro_input">{errors.nome?.message}</p>
                            {enviado === true && <p className="tarefa_cdastrada">Tarefa Cadastrada</p>}
                        </div>
                        <button type="submit" className="btn_cadastrar">Cadastrar Tarefa</button>
                    </form>

                </div>

                <div className="tarefas_gap direction_column">
                    {listaConteudo === true &&
                        listaTarefa.map((listaTarefa: any, id: number) => {
                            return <div key={id}>
                                <Tarefa
                                    id={listaTarefa.id}
                                    nome={listaTarefa.nome}
                                    concluido={listaTarefa.concluido}
                                />
                            </div>
                        })
                    }
                </div>
            </section >
        </main >
    )
}

export default Home;