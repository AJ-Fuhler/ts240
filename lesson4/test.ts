type Result<T, E> =
  | {status: "success"; value: T}
  | {status: "failure"; error: E};

function divide(
  numerator: number,
  denominator: number
): Result<number, string> {
  if (denominator === 0) {
    return {status: "failure", error: "Division by zero"}
  }
  return {status: "success", value: numerator / denominator};
}