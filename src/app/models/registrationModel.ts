export class RegistrationModel {
  private name: String = ""
  private email: String = ""
  private password: String = ""

  get getName(): String {
    return this.name;
  }

  set setName(value: String) {
    this.name = value;
  }

  get getEmail(): String {
    return this.email;
  }

  set setEmail(value: String) {
    this.email = value;
  }

  get getPassword(): String {
    return this.password;
  }

  set setPassword(value: String) {
    this.password = value;
  }


}

