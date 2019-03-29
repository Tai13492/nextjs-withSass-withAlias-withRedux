import Document, { Head, Main, NextScript } from "next/document";
import MetaHead from "../components/MetaHead"

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
        <Head>
          <MetaHead
            title="หมอประเวช (morprawate)"
            description_content="เรียนรู้ตัวเองเพื่อความสุขและความสำเร็จในชีวิตกับหมอประเวช จิตแพทย์ผู้สนใจการเข้าถึงศักยภาพภายใน ด้วยการผสมผสานศาสตร์ตะวันออกและวิทยาการตะวันตก อาทิ ศาสตร์การผ่อนคลาย สติกับการพัฒนาตน วิทยาการสมอง แก้ซึมเศร้าแบบไม่ใช้ยา จิตวิทยาความสุข จิตบำบัดแนวซาเทียร์ พบกับหลักสูตรการอบรมทั้งแบบวันเดียวและสองวันหนึ่งคืน แอพลิเคชั่น และไลฟ์เป็นประจำทุกสัปดาห์"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
