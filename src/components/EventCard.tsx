import type { ServiceAssignment } from "../data.ts";

import Array from "./Array.tsx";
import Text from "./Text.tsx";

import styles from "./EventCard.module.css";

export default function EventCard({ event }: { event: ServiceAssignment }) {
  return (
    <div className={styles.eventCard}>
      <p>{event.datum}</p>
      <Text name="Botschaft" data={event.botschaft} />
      {event.botschaftAuswartig && (
        <Array name="Botschaft Auswartig" data={event.botschaftAuswartig} />
      )}
      <Text name="Programm Leiter" data={event.programmleiter} />
      <Text name="Sing Leiter" data={event.singLeiter} />
      <Array name="Sänger Helfer" data={event.sangerHalfer || []} />
      <Array name="Instrumenten" data={event.instrumenten || []} />
      <Text name="Pianistin" data={event.pianistin} />
      {event.praludium && <Text name="Präludium" data={event.praludium} />}
      {event.extraNumer && <Text name="Extra Nummer" data={event.extraNumer} />}
      {event.ssPianistinErwachsene && (
        <Text
          name="SS Pianistin Erwachsene"
          data={event.ssPianistinErwachsene}
        />
      )}
      {event.ssGesangErwachsene && (
        <Text name="SS Gesang Erwachsene" data={event.ssGesangErwachsene} />
      )}
      {event.ssGesangHelfer && (
        <Array name="SS Gesang Helfer" data={event.ssGesangHelfer} />
      )}
      <Array name="Lautsprecher" data={event.sound} />
      <Array name="Live Stream" data={event.liveStream} />
    </div>
  );
}
