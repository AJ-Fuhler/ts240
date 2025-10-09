async function getData(url: string): Promise<void> {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("An unknown error occurred");
    }
  }
}