function index(number) {
  if (!number) return

  const lastIndexDot = number.lastIndexOf(".")
  const lastIndexComma = number.lastIndexOf(",")

  number = number.trim().replace(/\s/g, "")

  if (lastIndexComma > lastIndexDot) {
    number = number.replace(/\./g, "")
    number = number.replace(/\,/g, ".")
  } else {
    number = number.replace(/\,/g, "")
  }
  number = number.replace(/[^0-9\.]+/g, "")
  return parseFloat(number)
}

module.exports = index;
