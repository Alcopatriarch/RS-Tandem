import type { DashboardCardType } from "../../../types/Dashboard/DashboardCardType";
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';
import neural from '../../../assets/neural.png'
export const TopicCard = ({
  title,
  category,
  level,
  xpReward,
  totalTasks,
  completedTasks,
  onActionClick,
}:DashboardCardType) => {
  const progressPercentage = Math.round((completedTasks / totalTasks) * 100) || 0;
  const isCompleted = completedTasks === totalTasks;
  const levelStyles = {
    Basic: 'border-emerald-700 text-emerald-900 bg-emerald-100',
    Medium: 'border-orange-600 text-orange-900 bg-orange-200',
    Advanced: 'border-rose-800 text-rose-900 bg-rose-200',
  };

  const renderIcon = () => {
    if (category === 'JS') {
      return (
        <div className="w-8 h-8 rounded-md bg-[#F7DF1E] text-black flex items-center justify-center font-bold text-sm">
          JS
        </div>
      );
    }
    if (category === 'TS') {
      return (
        <div className="w-8 h-8 rounded-md bg-[#3178C6] text-white flex items-center justify-center font-bold text-sm">
          TS
        </div>
      );
    }
    return (
      <div className="w-8 h-8 rounded-md bg-white border border-gray-300 flex items-center justify-center text-lg">
     <img  src={neural} alt="Algorithm icon"/>
      </div>
    );
  };

  return (
    <div className="bg-[#EAECEF] rounded-[28px] p-5 w-full max-w-[340px] flex flex-col gap-6 font-figtree shadow-sm">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          {renderIcon()}
          <h3 className="text-[19px] font-bold text-[#11212D]">{title}</h3>
        </div>
        <div className="flex flex-col items-end gap-1">
          <span
            className={`px-[10px] py-[2px] rounded-full border text-[11px] font-bold uppercase tracking-wide ${levelStyles[level]}`}
          >
            {level}
          </span>
          <span className="text-[13px] font-bold text-[#11212D]">
            +{xpReward} XP
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex justify-between text-[14px] font-bold text-[#11212D]">
          <span>{totalTasks} tasks</span>
          <span>{progressPercentage}%</span>
        </div>
        
        <div className="w-full h-[6px] bg-[#C1C8CE] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#273B4A] rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      <button
        onClick={onActionClick}
        className={`w-full py-3 rounded-2xl font-bold text-[16px] transition-colors flex items-center justify-center gap-2
          ${
            isCompleted
              ? 'bg-[#596A75] hover:bg-[#4A5963] text-white'
              : 'bg-[#273B4A] hover:bg-[#1A2A35] text-white'
          }
        `}
      >
        {isCompleted && <ReplayOutlinedIcon className="!text-[20px]" />}
        {isCompleted ? 'Done' : 'Continue'}
      </button>
      
    </div>
  );
};

export default TopicCard;
