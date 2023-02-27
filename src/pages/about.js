import Layout from '@/components/layout';
import Image from 'next/image';

export default function About() {
  return (
    <Layout>
      <div className="max-w-2xl px-4 mx-auto">
        <h1 className="text-center py-4 font-semibold text-3xl text-slate-700">
          Have We Already Been Visited by Aliens?
        </h1>
        <div className="mt-4 min-w-full">
          <Image
            className="rounded-lg"
            width={600}
            height={300}
            alt="Project Blue Book"
            src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/01/mars-attacks-martians-social.jpg"
          />
          <h2 className="text-center py-4 font-semibold text-2xl text-slate-700">
            Mars Attacks!
          </h2>
          <p className="inline-block">
            The plot of Mars Attacks! is extremely simple – an army of invaders
            from Mars arrive on Earth and proceed to conquer it through
            hilarious violence, including assassinating the president with a
            novelty hand gag and laboriously wheeling a 10-foot death ray
            directly up to the back of an extremely old woman’s head. Said old
            woman’s grandson, Lukas Haas, discovers in that very moment that
            listening to the wailing croons of Slim Whitman causes the Martian’s
            heads to explode, and the invaders are defeated in just as
            inglorious a manner as the Earth was sacked. Along the way we meet
            over a dozen different characters, including Jack Nicholson as both
            the president and a sleazy Las Vegas grifter, Glenn Close as the
            First Lady, and Natalie Portman as the president’s daughter, who is
            inexplicably named Taffy. The absolutely unbelievable cast also
            includes Annette Bening, Pierce Brosnan, Michael J. Fox, Sarah
            Jessica Parker, Martin Short, Jim Brown, Pam Grier, Danny DeVito,
            Rod Steiger, Christina Applegate, and a pre-fame Jack Black. And
            roughly 90% majority of these stars get murked in extremely
            humiliating fashion within two or three scenes of appearing. The
            heroes of Mars Attacks! end up being a dirt-poor teenager and his
            senile grandma, a moony New Age lady, and a working-class family of
            four (and, I cannot stress this enough, Tom Jones).
          </p>
        </div>
        <div className="mt-4 min-w-full">
          <Image
            className="rounded-lg"
            width={600}
            height={300}
            alt="Project Blue Book"
            src="https://public-content-aetn.video.aetnd.com/video-thumbnails/AETN-History_VMS/920/1022/BRANDHD2398_THC_HOSF_223285_SFM_000_2398_15_20181022_00_HD.jpg"
          />
          <h2 className="text-center py-4 font-semibold text-2xl text-slate-700">
            Project Blue Book: saucer sightings and more
          </h2>
          <p className="inline-block">
            Project Sign was terminated in late 1948 and replaced by the
            short-lived Project Grudge, which was later succeeded in 1951 by the
            now-famous Project Blue Book. Based at Wright-Patterson Air Force
            Base near Dayton, Ohio, Blue Book served as the government’s main
            repository for sightings of unidentified aerial phenomena. Over the
            next 18 years, its tiny staff investigated thousands of reports and
            often went into the field to interview Americans who had experienced
            close encounters with all manner of flying saucers and discs,
            cigar-shaped rockets and dazzling nighttime lights. The “Blue Book”
            era began with a bang. Projects Sign and Grudge had only averaged
            around 170 UFO reports each year, but 1952 brought an unprecedented
            1,501 sightings. Perhaps the most extraordinary of all came in July
            1952, when a series of unusual blips suddenly lit up radar screens
            across Washington, D.C. Bewildered military personnel scrambled jets
            to intercept the bogies, but while their pilots reported seeing
            bright lights dancing through the night sky, they were unable to
            catch them.
            <a
              className="px-2 text-blue-500 hover:text-blue-600"
              href="https://www.history.com/news/u-s-air-force-closes-the-book-on-ufos-45-years-ago"
            >
              Continue read
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
}
