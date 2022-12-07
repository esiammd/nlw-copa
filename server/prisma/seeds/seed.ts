import { group_a } from "./official_games_group_stage/group_a"
import { group_b } from "./official_games_group_stage/group_b"
import { group_c } from "./official_games_group_stage/group_c"
import { group_d } from "./official_games_group_stage/group_d"
import { group_e } from "./official_games_group_stage/group_e"
import { group_f } from "./official_games_group_stage/group_f"
import { group_g } from "./official_games_group_stage/group_g"
import { group_h } from "./official_games_group_stage/group_h"

import { round_of_16 } from "./official_games_knockout_stage/round_of_16"
import { round_of_8 } from "./official_games_knockout_stage/round_of_8"
import { semi_final } from "./official_games_knockout_stage/semi_final"
import { final } from "./official_games_knockout_stage/final"

async function main() {
    // OFFICIAL GAMES GROUP STAGE
    group_a()
    group_b()
    group_c()
    group_d()
    group_e()
    group_f()
    group_g()
    group_h()

    // // OFFICIAL GAMES KNOCKOUT STAGE
    round_of_16()
    round_of_8()
    semi_final()
    final()
}

main()