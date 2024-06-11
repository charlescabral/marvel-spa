const useFormatIso = (dateString: string): string => {
  const options = { day: 'numeric', month: 'short', year: 'numeric' } as const
  const date = new Date(dateString)
  const formattedDate = date.toLocaleDateString('pt-BR', options)
  return formattedDate.replace(/(\d+) de (\w+)\.? de (\d+)/, '$1 $2 $3')
}
export default useFormatIso
