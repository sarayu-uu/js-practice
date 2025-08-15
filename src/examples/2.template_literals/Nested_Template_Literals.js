let greet = name => `Hello, ${name}!`;
console.log(`Saying hi: ${greet("Sarayu")}`);




console.log("--------");

let interviewRound = round => `Round ${round}: ${
    round === 1 ? "She walked in confidently."
    : round === 2 ? "Answered like a pro."
    : round === 3 ? "Accidentally mentioned her Netflix watchlist."
    : round === 4 ? "Asked HR if snacks were free."
    : "Left the room like it was all part of the plan."
}`;

let story = `Interview Progress:
${interviewRound(1)}
${interviewRound(2)}
${interviewRound(3)}
${interviewRound(4)}
${interviewRound(5)}

Verdict: Let's just say... there's always next time.`;

console.log(story);
