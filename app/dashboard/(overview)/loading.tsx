import DashboardSkeleton from "../../ui/skeletons";

//special component from pages to show loading state
export default function Loading() {
  //technic to show loading state
  //no momento esse componente não vai ser utilizado, pois o componente Page do dashboard não está fazendo requisições
  //pois delegamos a responsabilidade de pegar os dados para os próprios componentes.
  //Assim, utilizamos o componente <Suspense/> do React pra passar o componente que vai ser renderizado enquanto os dados não chegam

  return (
    <DashboardSkeleton />
  );
}