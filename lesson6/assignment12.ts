async function getData(url: string): Promise<void> {
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
}