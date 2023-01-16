import "module-alias/register"

export async function main(): Promise<string> {
  const message = "Hello world"
  console.log(message)
  return message
}

main().catch(console.error)
