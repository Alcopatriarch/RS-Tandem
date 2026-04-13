import React, { useCallback, useEffect, useState } from "react";
import type { RoundProps } from "../../../../types/Dashboard/RoundProps";
import type { RoundType } from "../../../../types/Dashboard/RoundType";
import { BlockBuilder } from "../Tasks/BlockBuilder/BlockBuilder";
import { DragOrderRound } from "../Tasks/DragAndDrop/DragAndDrop";
import FillBlank from "../Tasks/FillBlank/FillBlank";
import { TestTask } from "../Tasks/TestTask";
import { ProgressBar } from "../CardElements/ProgressBar";
import CardHeader from "../CardElements/CardHeader";
import { QuestionCard } from "../CardElements/QuestionCard";
import { ROUND_COLORS } from "../../../../constants/DashboardConstants";
import type { Topic } from "../../../../types/Dashboard/Topic";
import { RoundStepper } from "./RoundStepper";
import { TopicHeader } from "./TopicHeader";
import { CompletionScreen } from "./CompleteTasks";
const ROUND_COMPONENTS: Record<RoundType, React.FC<RoundProps>> = {
  drag_order: DragOrderRound,
  fill_blank: FillBlank,
  block_builder: BlockBuilder,
  quiz: TestTask,
};

export function TopicView({ topic, onBack }: { topic: Topic; onBack: () => void; }) {
  const storageKey = `progress_topic_${topic.id || topic.label}`;
  const [current, setCurrent] = useState(() => {
    const savedCurrent = localStorage.getItem(`${storageKey}_current`);
    return savedCurrent ? parseInt(savedCurrent, 10) : 0;
  });
  const [scores, setScores] = useState<Record<number, number>>(() => {
    const savedScores = localStorage.getItem(`${storageKey}_scores`);
    if (savedScores) {
      return JSON.parse(savedScores);
    }
    return Object.fromEntries(topic.rounds.map((r) => [r.round, 0]));
  });

useEffect(() => {
    localStorage.setItem(`${storageKey}_current`, current.toString());
  }, [current, storageKey]);
  useEffect(() => {
    localStorage.setItem(`${storageKey}_scores`, JSON.stringify(scores));
  }, [scores, storageKey]);

  const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);
  const allFinished = current >= topic.rounds.length;

  const advance = useCallback(() => {
    setCurrent((prev) => Math.min(prev + 1, topic.rounds.length));
  }, [topic.rounds.length]);

  const handleComplete = useCallback(
    (roundNum: number, pts: number) => {
      setScores((prev) =>
        prev[roundNum] >= pts ? prev : { ...prev, [roundNum]: pts },
      );
      setTimeout(advance, 600);
    },
    [advance],
  );
const handleRestart = useCallback(() => {
    setCurrent(0);
    const resetScores = Object.fromEntries(topic.rounds.map((r) => [r.round, 0]));
    setScores(resetScores);
    localStorage.removeItem(`${storageKey}_current`);
    localStorage.setItem(`${storageKey}_scores`, JSON.stringify(resetScores));
  }, [topic.rounds, storageKey]);

  const handleReveal = useCallback(
    () => {
      setTimeout(advance, 800);
    },
    [advance],
  );
  const round = topic.rounds[current];
  const color = round ? ROUND_COLORS[(round.round - 1) % ROUND_COLORS.length] : "teal";
  const Component = round ? ROUND_COMPONENTS[round.type] : null;

  return (
    <div className="min-h-screen bg-[#F8F9FA] w-full py-8 px-4 font-figtree">
      <div className="max-w-2xl mx-auto space-y-6">
        
        <div className="space-y-3">
          <TopicHeader 
            label={topic.label} 
            allFinished={allFinished} 
            onBack={onBack} 
          />
          <ProgressBar
            tasks={totalScore}
            total={topic.totalPoints}
            type="inline"
          />
          <RoundStepper 
            rounds={topic.rounds} 
            current={current} 
          />
        </div>
        {!allFinished && round && Component && (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            <CardHeader round={round} color={color} />
            <QuestionCard>
              <Component
              key={current}
                round={round}
                onComplete={(pts) => handleComplete(round.round, pts)}
                onReveal={() => handleReveal()}
              />
            </QuestionCard>
          </div>
        )}
        {allFinished && (
          <CompletionScreen 
            totalScore={totalScore} 
            totalPoints={topic.totalPoints} 
            onBack={onBack} 
            onRestart={handleRestart}
          />
        )}
        
      </div>
    </div>
  );
}

export default TopicView;