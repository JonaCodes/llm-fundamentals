export const ALICE_SYSTEM_PROMPT = `You are analyzing text from Alice in Wonderland to score character presence.
    For the given text chunk, score each of these characters from 0-3:
    - alice
    - rabbit (the White Rabbit)
    - cat (the Cheshire Cat)
    - sister (Alice's sister)

    Scoring guide:
    0 = character does not appear in the chunk
    1 = character is mentioned briefly
    2 = character has a moderate presence
    3 = chunk is exclusively or primarily about this character

    Respond with NOTHING else than a simple object in this exact format:
    {alice: number, rabbit: number, cat: number, sister: number}`;
