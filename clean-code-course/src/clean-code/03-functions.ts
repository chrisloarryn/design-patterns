// @ts-nocheck

type CreateMovieDTO = {
  title: string;
  description: string;
  rating: number;
  cast: string[];
};

(() => {
  function getMovieById(id: string) {
    console.log({ id });
  }

  function getMovieCastById(id: string) {
    console.log({ id });
  }

  function getActorBioById(id: string) {
    console.log({ id });
  }

  function createMovie({ cast, description, rating, title }: CreateMovieDTO) {
    console.log({ cast, description, rating, title });
  }

  function checkFullName(fullName: string): boolean {
    if (fullName.length < 5) {
      throw new Error('Full name is too short');
    }
    console.log({ fullName });
    return true;
  }

  function createActor(fullName: string, birthDate: Date): boolean {
    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (checkFullName(fullName)) return false;

    console.log('Crear actor', birthDate);
    return true;
  }

  // Continue
  const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
    if (isDead) return 1500;
    if (isSeparated) return 2500;
    return isRetired ? 3000 : 4000;
  };
})();
