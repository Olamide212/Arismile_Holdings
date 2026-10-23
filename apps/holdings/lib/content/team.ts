import { groupLeadership, type LeaderProfile } from "@arismile/brand";

export type TeamMember = LeaderProfile;

/** Leadership listed on arismile.ng/about (shared via @arismile/brand). */
export const team: TeamMember[] = groupLeadership;
