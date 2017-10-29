const bankAccount = function bankAccount(initialBal, newPassword) {
  let balance = initialBal
  const passwordDigest = createPasswordDigest(newPassword)

  return {
    getBalance: function(password) {
      if (isValidPassword(passwordDigest, password)) {
        return balance
      } else {
        throw 'unauthorized'
      }
    }
  }
}
