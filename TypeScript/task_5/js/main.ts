// 1️⃣ MajorCredits interface (avec branding)
interface MajorCredits {
  credits: number;
  brand: "MajorCredits";
}

// 2️⃣ MinorCredits interface (avec branding)
interface MinorCredits {
  credits: number;
  brand: "MinorCredits";
}

// 3️⃣ sumMajorCredits
function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "MajorCredits",
  };
}

// 4️⃣ sumMinorCredits
function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "MinorCredits",
  };
}
console.log("Testing Major and Minor credits");
const majorA: MajorCredits = { credits: 3, brand: "MajorCredits" };
const majorB: MajorCredits = { credits: 2, brand: "MajorCredits" };

const minorA: MinorCredits = { credits: 1, brand: "MinorCredits" };
const minorB: MinorCredits = { credits: 4, brand: "MinorCredits" };

console.log(sumMajorCredits(majorA, majorB));
console.log(sumMinorCredits(minorA, minorB));
