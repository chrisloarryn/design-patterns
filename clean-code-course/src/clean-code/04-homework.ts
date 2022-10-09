enum RedFruit {
  MANZANA = 'manzana',
  CEREZA = 'cereza',
  CIRUELA = 'ciruela',
}

enum GreenFruit {
  PERA = 'pera',
  UVA = 'uva',
  MELON = 'melon',
}

enum YellowFruit {
  NARANJA = 'naranja',
  LIMON = 'limon',
  PAPAYA = 'papaya',
  PIÑA = 'piña',
  BANANA = 'banana',
}

enum PurpleFruit {
  MORA = 'mora',
  FRAMBUESA = 'frambuesa',
  ARANDANO = 'arandano',
  UVA = 'uva',
}

type Fruit = RedFruit | GreenFruit | YellowFruit | PurpleFruit;

type FruitColor = 'red' | 'green' | 'yellow' | 'purple';

(() => {
  // Resolver sin la triple condicional dentro del if
  // includes? arrays?
  // parameter is value from Fruit enum
  function isRedFruit(fruit: RedFruit): boolean {
    return [...Object.values(RedFruit)].includes(fruit);
  }

  // Simplificar esta función
  // switch? Object literal? validar posibles colores
  function getFruitsByColor(color: FruitColor): string[] {
    const fruitsByColor = {
      red: [...Object.values(RedFruit)],
      green: [...Object.values(GreenFruit)],
      yellow: [...Object.values(YellowFruit)],
      purple: [...Object.values(PurpleFruit)],
    };

    // default case
    if (!Object.keys(fruitsByColor).includes(color)) {
      throw new Error(`the color must be: ${Object.keys(fruitsByColor).join(', ')}`);
    }

    return fruitsByColor[color];
  }

  // Simplificar esta función
  let isFirstStepWorking = true;
  let isSecondStepWorking = true;
  let isThirdStepWorking = 1;
  let isFourthStepWorking = true;

  function workingSteps(): string {
    if (!isFirstStepWorking) return 'First step broken.';
    if (!isSecondStepWorking) return 'Second step broken.';
    if (!isThirdStepWorking) return 'Third step broken.';
    if (!isFourthStepWorking) return 'Fourth step broken.';

    return 'Working properly!';
  }

  // isRedFruit
  console.log({ isRedFruit: isRedFruit(RedFruit.CEREZA), fruit: 'cereza' }); // true
  // console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // false // Error

  //getFruitsByColor
  console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
  console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
  console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
  // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

  // workingSteps
  console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados
})();
