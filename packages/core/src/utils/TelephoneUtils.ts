export default class TelephoneUtils {
  static format(telephone: string): string {
    if (!telephone) {
      return "";
    }

    const numbers = this.deformat(telephone);

    return numbers.length <= 10
      ? this.replaceNumbers(numbers, "(xx) xxxx-xxxx")
      : this.replaceNumbers(numbers, "(xx) xxxxx-xxxx");
  }

  static deformat(telephone: string): string {
    if (!telephone) {
      return "";
    }

    return telephone.replace(/\D/g, "").slice(0, 11);
  }

  private static replaceNumbers(telephone: string, ref: string): string {
    let formatted = telephone
      .split("")
      .reduce((telephone, numero) => {
        return telephone.replace("x", numero);
      }, ref)
      .replace(/x/g, "");

    if (telephone.length <= 2) {
      formatted = formatted.replace(")", "").replace(" ", "");
    }

    if (telephone.length <= 6) {
      formatted = formatted.replace("-", "");
    }

    return formatted;
  }
}
