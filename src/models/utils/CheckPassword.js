import bcrypt from 'bcryptjs'

export default function checkPassword(password) {
  return bcrypt.compare(password, this.password_hash);
}