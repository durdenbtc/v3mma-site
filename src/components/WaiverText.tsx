/**
 * The full participation agreement, rendered exactly as it is archived.
 *
 * The wrapper's innerHTML is read back on submit and stored alongside the
 * signature, so the PDF on file is literally the text the signer saw.
 *
 * Section B carries the Fla. Stat. 744.301(3)(b) notice, which the statute
 * requires to be uppercase and at least 5 points larger than the rest of the
 * text — hence text-2xl against a text-base body.
 */
export default function WaiverText({ isMinor }: { isMinor: boolean }) {
  return (
    <div className="text-slate-200 text-base leading-relaxed space-y-4">
      <h3 className="text-xl font-black text-white">
        HURRICANE MMA LLC d/b/a V3 MMA GYM &amp; FITNESS
      </h3>
      <h3 className="text-lg font-bold text-white">
        PARTICIPATION AGREEMENT, ASSUMPTION OF RISK, WAIVER AND RELEASE OF LIABILITY, AND
        INDEMNIFICATION AGREEMENT
      </h3>

      <p className="font-bold text-white">
        READ CAREFULLY. THIS DOCUMENT AFFECTS YOUR LEGAL RIGHTS. BY SIGNING, YOU GIVE UP THE RIGHT
        TO SUE FOR INJURIES, INCLUDING DEATH, ARISING FROM THE ACTIVITIES DESCRIBED BELOW,
        INCLUDING INJURIES CAUSED BY THE ORDINARY NEGLIGENCE OF THE RELEASEES.
      </p>

      <p>
        <strong className="text-white">1. Parties and Definitions.</strong> This Agreement is made
        by the undersigned participant (and, if the participant is under 18, by the
        participant&apos;s parent or legal guardian) (&ldquo;I,&rdquo; &ldquo;me,&rdquo; or
        &ldquo;Participant&rdquo;) in favor of HURRICANE MMA LLC, d/b/a V3 MMA, a Florida limited
        liability company doing business as V3 MMA and V3 MMA Gym &amp; Fitness, located at 476 NW
        Peacock Blvd #108, Port St. Lucie, FL 34986 (the &ldquo;Gym&rdquo;), together with its
        owners, members, managers, officers, directors, employees, coaches, instructors,
        independent contractors, guest instructors, volunteers, agents, affiliates, insurers,
        successors, and assigns; Leonid Shalimov individually; the owner and landlord of the
        premises; and the sponsors and organizers of any event held at or by the Gym (collectively,
        the &ldquo;Releasees&rdquo;).
      </p>

      <p>
        &ldquo;Activities&rdquo; means every program, class, service, and use of the premises
        offered by or through the Gym, including but not limited to mixed martial arts (MMA),
        boxing, kickboxing, Muay Thai, Brazilian Jiu-Jitsu (gi and no-gi), wrestling and grappling,
        MMA Fitness and conditioning, the kids martial arts program, private and semi-private
        coaching, open mat, sparring and live training, seminars and guest instruction,
        competitions and events, use of any equipment, mats, bags, weights, or fitness apparatus,
        and being present anywhere on the premises, whether as a participant, trial participant,
        spectator, or guest.
      </p>

      <p>
        &ldquo;Term&rdquo; means the period beginning when I sign this Agreement and continuing
        through my last visit to the Gym, including every membership term, renewal, trial,
        drop-in, open mat, and event, without the need to sign again.
      </p>

      <p>
        <strong className="text-white">
          2. Voluntary Participation and Medical Representation.
        </strong>{" "}
        I am participating in the Activities voluntarily. I represent that, to the best of my
        knowledge, I am in good physical condition and have no medical condition, injury, or
        impairment that would make participation unsafe, or I have disclosed any such condition to
        the Gym in writing and have been cleared by a physician. I have been advised to consult a
        physician before beginning any program of physical activity. I will stop participating
        immediately and notify a coach if I experience pain, dizziness, shortness of breath, head
        impact, or any other sign of injury or illness. I am responsible for maintaining my own
        health and accident insurance.
      </p>

      <p>
        <strong className="text-white">3. Acknowledgment and Assumption of Risk.</strong>{" "}
        <strong className="text-white">
          I UNDERSTAND THAT THE ACTIVITIES ARE INHERENTLY DANGEROUS AND INVOLVE A SERIOUS RISK OF
          INJURY, INCLUDING PERMANENT DISABILITY AND DEATH.
        </strong>{" "}
        These risks include, but are not limited to: strikes with fists, feet, knees, elbows, and
        other body parts; chokes and strangulation; joint locks and submission holds; throws,
        takedowns, slams, and falls; concussion, head trauma, and traumatic brain injury; cuts,
        bruises, broken bones, sprains, strains, dislocations, and spinal injury; cardiovascular
        events, heat illness, and exhaustion; contact with equipment, walls, cages, mats, and
        floors; failure of equipment; the negligent or intentional acts of other participants,
        instructors, or spectators; the condition of the facility; exposure to communicable
        disease; and travel to and from the facility. I understand that these risks exist even when
        the Activities are conducted with reasonable care, and that the Releasees cannot eliminate
        them.{" "}
        <strong className="text-white">
          KNOWING THESE RISKS, I VOLUNTARILY ACCEPT AND ASSUME ALL OF THEM, KNOWN AND UNKNOWN, AND
          ALL RESPONSIBILITY FOR ANY RESULTING INJURY, ILLNESS, DEATH, OR PROPERTY LOSS.
        </strong>
      </p>

      <p>
        <strong className="text-white">4. Rules and Conduct.</strong> I will follow all Gym rules,
        posted signs, and instructions of coaches and staff; will use protective equipment as
        directed; will tap early and respect a training partner&apos;s tap; will not participate
        under the influence of alcohol or drugs; and will not engage in sparring or live training
        without a coach&apos;s permission. I understand that violating these rules increases the
        risk of injury to me and others, and that any such participation is at my sole risk. The
        Gym may suspend or terminate my participation for any conduct it considers unsafe.
      </p>

      <p>
        <strong className="text-white">5. Release, Waiver, and Covenant Not to Sue.</strong>{" "}
        <strong className="text-white">
          IN CONSIDERATION OF BEING PERMITTED TO PARTICIPATE IN THE ACTIVITIES AND USE THE
          PREMISES, I, FOR MYSELF AND FOR MY SPOUSE, FAMILY, HEIRS, EXECUTORS, ADMINISTRATORS,
          PERSONAL REPRESENTATIVES, AND ASSIGNS, HEREBY RELEASE, WAIVE, DISCHARGE, AND COVENANT
          NOT TO SUE THE RELEASEES FROM AND FOR ANY AND ALL CLAIMS, DEMANDS, LOSSES, LIABILITIES,
          DAMAGES, COSTS, AND CAUSES OF ACTION OF ANY KIND, WHETHER KNOWN OR UNKNOWN, ARISING OUT
          OF OR RELATED TO MY PARTICIPATION IN THE ACTIVITIES OR MY PRESENCE ON THE PREMISES DURING
          THE TERM, INCLUDING ANY PERSONAL INJURY, ILLNESS, DEATH, OR PROPERTY LOSS, AND INCLUDING
          CLAIMS ARISING FROM THE ORDINARY NEGLIGENCE OF THE RELEASEES.
        </strong>{" "}
        This release does not apply to claims arising from the gross negligence or intentional
        misconduct of a Releasee, or to any claim that cannot be released under Florida law.
      </p>

      <p>
        <strong className="text-white">6. Indemnification and Hold Harmless.</strong> I agree to
        indemnify, defend, and hold harmless the Releasees from and against any and all claims,
        demands, suits, judgments, losses, and expenses (including reasonable attorney&apos;s fees
        and costs) brought by any third party — including another participant, a guest I bring, or
        a member of my family — arising out of or related to my participation in the Activities, my
        presence on the premises, or my breach of this Agreement, to the fullest extent permitted
        by Florida law.
      </p>

      <p>
        <strong className="text-white">7. Emergency Medical Authorization.</strong> If I am injured
        or become ill and am unable to consent, I authorize the Gym and its staff to provide first
        aid and to summon emergency medical services, and I authorize any licensed medical provider
        to render treatment and transport they consider necessary. I am responsible for all costs
        of such care. The Releasees are not responsible for the quality of care rendered by any
        third-party medical provider.
      </p>

      <p>
        <strong className="text-white">8. Photo and Media Release.</strong> I grant the Gym
        permission to photograph and record me during the Activities and to use my name, image,
        likeness, and voice in the Gym&apos;s marketing, website, and social media, in any medium,
        without compensation. I may withdraw this permission for future use by written notice,
        which will not affect material already published. Declining this section does not affect
        the rest of this Agreement.
      </p>

      <p>
        <strong className="text-white">9. General Provisions.</strong> (a){" "}
        <strong className="text-white">Governing law and venue.</strong> This Agreement is governed
        by the laws of the State of Florida without regard to conflict-of-law rules. Any action
        arising from this Agreement or the Activities shall be brought exclusively in the state or
        federal courts located in St. Lucie County, Florida, and I consent to personal jurisdiction
        there. (b) <strong className="text-white">Severability.</strong> If any provision of this
        Agreement is held invalid or unenforceable, that provision shall be enforced to the maximum
        extent permitted and the remaining provisions shall remain in full force and effect. (c){" "}
        <strong className="text-white">Entire agreement.</strong> This Agreement is the entire
        agreement between me and the Releasees regarding its subject matter. No oral
        representations, statements, or inducements apart from this written Agreement have been
        made. This Agreement may be modified only in a writing signed by the Gym. (d){" "}
        <strong className="text-white">Binding effect.</strong> This Agreement binds my spouse,
        family, heirs, executors, administrators, personal representatives, and assigns. (e){" "}
        <strong className="text-white">Electronic signature.</strong> I agree that my electronic
        signature and any electronic record of this Agreement have the same legal effect as a
        handwritten signature and paper record, and I consent to conducting this transaction
        electronically. (f) <strong className="text-white">Construction.</strong> Headings are for
        convenience only. This Agreement shall not be construed against the drafter.
      </p>

      <p>
        <strong className="text-white">10. Acknowledgment.</strong>{" "}
        <strong className="text-white">
          I HAVE READ THIS AGREEMENT IN ITS ENTIRETY. I UNDERSTAND THAT BY SIGNING IT I AM GIVING
          UP SUBSTANTIAL LEGAL RIGHTS, INCLUDING THE RIGHT TO SUE THE RELEASEES FOR THEIR ORDINARY
          NEGLIGENCE. I SIGN IT VOLUNTARILY, WITHOUT ANY INDUCEMENT, AND FOR FULL AND ADEQUATE
          CONSIDERATION, INTENDING TO BE BOUND.
        </strong>
      </p>

      {isMinor && (
        <div className="pt-6 mt-6 border-t-2 border-amber-400/40 space-y-4">
          <h4 className="text-lg font-black text-white">
            SECTION B — MINOR PARTICIPANT (under 18) — PARENT OR LEGAL GUARDIAN MUST COMPLETE.
          </h4>

          {/* Fla. Stat. 744.301(3)(b): uppercase, at least 5pt larger than body text. */}
          <h2 className="text-2xl font-black text-amber-300 leading-snug">
            NOTICE TO THE MINOR CHILD&apos;S NATURAL GUARDIAN
          </h2>
          <h2 className="text-2xl font-black text-amber-300 leading-snug">
            READ THIS FORM COMPLETELY AND CAREFULLY. YOU ARE AGREEING TO LET YOUR MINOR CHILD
            ENGAGE IN A POTENTIALLY DANGEROUS ACTIVITY. YOU ARE AGREEING THAT, EVEN IF HURRICANE
            MMA LLC D/B/A V3 MMA, ITS OWNERS, AFFILIATES, EMPLOYEES, AND AGENTS USE REASONABLE CARE
            IN PROVIDING THIS ACTIVITY, THERE IS A CHANCE YOUR CHILD MAY BE SERIOUSLY INJURED OR
            KILLED BY PARTICIPATING IN THIS ACTIVITY BECAUSE THERE ARE CERTAIN DANGERS INHERENT IN
            THE ACTIVITY WHICH CANNOT BE AVOIDED OR ELIMINATED. BY SIGNING THIS FORM YOU ARE GIVING
            UP YOUR CHILD&apos;S RIGHT AND YOUR RIGHT TO RECOVER FROM HURRICANE MMA LLC D/B/A V3
            MMA, ITS OWNERS, AFFILIATES, EMPLOYEES, AND AGENTS IN A LAWSUIT FOR ANY PERSONAL
            INJURY, INCLUDING DEATH, TO YOUR CHILD OR ANY PROPERTY DAMAGE THAT RESULTS FROM THE
            RISKS THAT ARE A NATURAL PART OF THE ACTIVITY. YOU HAVE THE RIGHT TO REFUSE TO SIGN
            THIS FORM, AND HURRICANE MMA LLC D/B/A V3 MMA, ITS OWNERS, AFFILIATES, EMPLOYEES, AND
            AGENTS HAS THE RIGHT TO REFUSE TO LET YOUR CHILD PARTICIPATE IF YOU DO NOT SIGN THIS
            FORM.
          </h2>

          <p>
            I am the parent or legal guardian of the minor named below, with legal authority to
            sign on the minor&apos;s behalf. I have read this entire Agreement. On behalf of the
            minor and myself, I agree to every provision of this Agreement, and I specifically
            waive and release, in advance, any claim or cause of action against the Releasees that
            would accrue to the minor for personal injury, including death, and property damage
            resulting from an <strong className="text-white">inherent risk</strong> of the
            Activities, as that term is defined in Fla. Stat. § 744.301(3)(a). I understand that
            this waiver on the minor&apos;s behalf does not release the Releasees from liability
            for their own negligence, as Florida law does not permit that, and that Section 5 as
            applied to the minor&apos;s claims is limited accordingly. I further agree, for myself
            individually, to the release in Section 5 and the indemnification in Section 6 with
            respect to any claim arising from the minor&apos;s participation, including any claim I
            may have in my own right.
          </p>
        </div>
      )}
    </div>
  );
}
