document.addEventListener("DOMContentLoaded", () => {
    const features = [
        { feature: "leise", nuster: true, tesla: true },
        { feature: "weather", nuster: true, tesla: false },
        { feature: "eggs", nuster: true, tesla: false },
        { feature: "girls", nuster: true, tesla: false },
    ];

    let nusterScore = 0;
    let teslaScore = 0;

    const updateScores = () => {
        document.querySelector("[data-nuster-score] .comparison__score-number").textContent = nusterScore;
        document.querySelector("[data-tesla-score] .comparison__score-number").textContent = teslaScore;
    };

    const renderMarks = () => {
        features.forEach(({ feature, nuster, tesla }) => {
            const nusterMark = document.querySelector(`[data-feature="${feature}"] [data-nuster]`);
            const teslaMark = document.querySelector(`[data-feature="${feature}"] [data-tesla]`);

            nusterMark.innerHTML = nuster ? "&#10004;" : "&#10008;";
            teslaMark.innerHTML = tesla ? "&#10004;" : "&#10008;";

            if (nuster) nusterScore++;
            if (tesla) teslaScore++;
        });
    };

    renderMarks();
    updateScores();
});