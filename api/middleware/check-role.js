function permit(admin) {
  return (request, response, next) => {
    if (request.userData.role && admin === request.userData.role) next();
    else {
      response.json({ status: 403, message: "Access deined for this user" });
    }
  };
}
module.exports = permit;
