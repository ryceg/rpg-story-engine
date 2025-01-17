import { randomFloat } from "../rolls"

type DriftRule = [number, RegExp, string]

export function linguisticDrift(name: string) {
  // These rules get applied repeatedly until they cannot be applied any more
  const fix: DriftRule[] = [
    // Some vowels should never be doubled
    [1, /aa/g, `a`],
    [1, /ii/g, `i`],
    [1, /uu/g, `u`],
    // Some bad vowel combos
    [1, /ae/g, `a`],
    [1, /eu/g, `e`],
    // Some consonants should never be doubled
    [1, /([hjkqvwxy])\1/g, `$1`],
    // No tripled letters
    [1, /([a-z])\1\1/, `$1$1`],
    // Remove a doubled consonant when it has a consonant on both? ends
    [1, /([bcdfghjklmnpqrstvwxz])([bcdfghjklmnpqrstvwxz])\2([bcdfghjklmnpqrstvwxz])/g, `$1$2$3`],
    // [1, /([bcdfghjklmnpqrstvwxz])\1([bcdfghjklmnpqrstvwxz])/g, '$1$2'],
    // No -lee at the end of a word
    [1, /([^Ff][^r])ee /g, `$1ey `],
    [1, /([^Ff][^r])ee$/, `$1ey`],
    // ror, rur, rar, etc., are hard to say
    [1, /r([aeiou])r/, `$1r`],
    // no vowel before -ington
    [1, /([aeiou])ington$/, `ington`],
    // No -ttown
    [1, /ttown$/, `town`],
  ]

  // Simplify out some problematic combinations
  const modify: DriftRule[] = [
    // Sometimes remove a doubled consonant no matter where
    [0.5, /([bcdfghjkmnpqrstvwxyz])\1(\w)/, `$1$2`],
    // Some of the time turn a ph into f
    [0.5, /ph/, `f`],
    // Convert y to i
    [0.5, /([bcdfghjklmnpqrstvwxyz])y([bcdfghjklmnpqrstvwxyz])/, `$1ie$2`],
    // chrim => krim?
    [0.5, /chrim/, `krim`],
    // [^c]kr => $1
    [0.5, /([^c])kr/, `$1cr`],
    // oa => o
    [0.5, /oa/g, `o`],
    // Randomly swap vowels
    [0.05, /[aeiou]+/, `a`],
    [0.05, /[aeiou]+/, `e`],
    [0.05, /[aeiou]+/, `i`],
    [0.05, /[aeiou]+/, `o`],
    [0.05, /[aeiou]+/, `u`],
    // Randomly swap consonants
    // Thu Jun 21 17:07:45 2018 -- Scott R. Turner
    // Don't swap one consonant of a pair
    [0.01, /([aeiou])[bcdfghjklmnpqrstvwxyz]([aeiou])/, `$1b$2`],
    [0.01, /([aeiou])[bcdfghjklmnpqrstvwxyz]([aeiou])/, `$1c$2`],
    [0.01, /([aeiou])[bcdfghjklmnpqrstvwxyz]([aeiou])/, `$1d$2`],
    [0.01, /([aeiou])[bcdfghjklmnpqrstvwxyz]([aeiou])/, `$1f$2`],
    [0.01, /([aeiou])[bcdfghjklmnpqrstvwxyz]([aeiou])/, `$1g$2`],
    [0.01, /([aeiou])[bcdfghjklmnpqrstvwxyz]([aeiou])/, `$1j$2`],
    [0.01, /([aeiou])[bcdfghjklmnpqrstvwxyz]([aeiou])/, `$1k$2`],
    [0.01, /([aeiou])[bcdfghjklmnpqrstvwxyz]([aeiou])/, `$1l$2`],
    [0.01, /([aeiou])[bcdfghjklmnpqrstvwxyz]([aeiou])/, `$1m$2`],
    [0.01, /([aeiou])[bcdfghjklmnpqrstvwxyz]([aeiou])/, `$1n$2`],
    [0.01, /([aeiou])[bcdfghjklmnpqrstvwxyz]([aeiou])/, `$1p$2`],
    [0.01, /([aeiou])[bcdfghjklmnpqrstvwxyz]([aeiou])/, `$1r$2`],
    [0.01, /([aeiou])[bcdfghjklmnpqrstvwxyz]([aeiou])/, `$1s$2`],
    [0.01, /([aeiou])[bcdfghjklmnpqrstvwxyz]([aeiou])/, `$1t$2`],
    [0.01, /([aeiou])[bcdfghjklmnpqrstvwxyz]([aeiou])/, `$1v$2`],
    [0.01, /([aeiou])[bcdfghjklmnpqrstvwxyz]([aeiou])/, `$1w$2`],
    [0.01, /([aeiou])[bcdfghjklmnpqrstvwxyz]([aeiou])/, `$1y$2`],
    // Adding an superfluous e to the end...
    [0.5, /([bcdfghjklmnpqrstvwxyz])([bcdfghjklmnpqrtvwxyz])$/, `$1$2e`],
    [0.5, /oor/, `ore`],
    [0.5, /(\w)y(\w)/, `$1i$2`],
    [0.5, /ph/, `f`],
    [0.5, /f/, `ph`],
    [0.5, /nge/, `nj`],
    [0.5, /earl/, `url`],
    [0.5, /oung/, `ung`],
    [0.5, /ake/, `eak`],
  ]

  for (const value of fix) {
    if (randomFloat(1) <= value[0]) {
      name = name.replace(value[1], value[2])
    }
  }

  for (const value of modify) {
    if (randomFloat(1) <= value[0]) {
      name = name.replace(value[1], value[2])
    }
  }

  return name
}
