import React, {useCallback} from "react";
import {Align, Unit} from "../../../consts/common";
import {Bowl} from "../../../models/Bowl";
import BowlImage from "../BowlImage/BowlImage";
import Weight from "../Weight/Weight";
import LastUsage from "js/components/usage/LastUsage/LastUsage";
import {Usage} from "js/models/Usage";

import {CheckedIcon} from "../../common/Icons/Icons";
import BatteryIcon from "../../common/Icons/BatteryIcon/BatteryIcon";
import css from './BowlStatus.module.scss';
import {useHistory} from "react-router-dom";
import moment from "moment";

export interface IProps {
  bowl: Bowl,
  unit: Unit,
  mealPortion: number;
  usage?: Usage | null,
  align?: Align,
}

const BowlStatus = ({bowl, unit, align, usage, mealPortion}: IProps) => {
  const bowlColor = (bowl.battery < 5 && "yellow") || (bowl.levelPercent < 10 && bowl.isWater && 'purple') || undefined;
  const isBlink = (bowl.battery < 5) || (bowl.isWater && bowl.levelPercent < 10);

  let history = useHistory();
  const handleOnClick = useCallback(() => history.push('/bowl/' + bowl.type), [history, bowl.type]);
  return (
    <div className="widget">
      <div className={css.wrapper}>
        <div className={align === Align.horizontal ? css.desktopWrapper : css.mobileWrapper}>
          <div className={css.mainBlockWrapper} onClick={handleOnClick}>
            <div className={bowl.isOffline ? css.offlineBowl : css.onlineBowl}>
              <BowlImage
                zoom={1.1}
                type={bowl.type}
                bowlLevel={bowl.levelPercent}
                batteryLevel={bowl.battery}
                offline={bowl.isOffline}
                oldWater={false}
                color={(!bowl.isOffline && bowlColor) || undefined}
                blinkPattern={(isBlink && [500, 400, 500, 400, 500, 400, 500, 400, 500, 400, 500]) || undefined}
              />
              {!bowl.isOffline &&
                <div className={css.batteryBlock}>
                  <BatteryIcon level={bowl.battery} />
                  <div className={css.name}>{bowl.type}</div>
                </div>
              }
            </div>

            <div className={css.infoWrapper}>
              {!bowl.isOffline ? (
                <div className={css.infoContent}>
                  <div className={unit === Unit.cup ? css.weightCup : css.weight}>
                    <Weight unit={unit} value={unit === Unit.cup ? bowl.levelCups : bowl.levelGrams} size="large" color="black" />
                  </div>

                  <div className={css.lastSync} title="Last sync time">
                    <CheckedIcon />
                    <span>{bowl.updatedAt.fromNow()}</span>
                  </div>
                </div>)
                : (
                  <div className={css.infoContentOffline}>
                    <div>
                      {bowl.isWater ? "water" : "food"}
                    </div>
                    <div>
                      <span>offline: </span>
                      <span className={css.days}>{moment.duration(bowl.offlineDays.toFixed(0), 'days').humanize({d: 7, w: 4})}</span>
                    </div>
                  </div>
                )}
            </div>
          </div>

          {(usage || bowl.isOffline) && (
            <>
              <div className={css.divider} />

              <div className={css.lastUsageContent}>
                <LastUsage type={bowl.type} unit={unit} usage={usage} mealPortion={mealPortion} offline={bowl.isOffline} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default BowlStatus;
