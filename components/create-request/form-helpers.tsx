export function FormLabel({text}: {text: string}) {
  return (
    <label className="label">
      <label className="label-text">{text}</label>
    </label>
  )
}

export function FormError({error}: {error: string | undefined}) {
  if (!error) return <></>

  return (
    <label className="label label-text-alt text-error">
      {error}
    </label>
  )
}