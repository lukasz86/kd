import { ApiProperty } from '@nestjs/swagger';

export class SearchResult {
  @ApiProperty({
    example: 'BULLET',
    description: 'Case name',
  })
  caseName: string;

  @ApiProperty({
    example: 'XM1014 | Seasons',
    description: 'Item name',
  })
  name: string;

  @ApiProperty({
    example:
      'https://cdn.key-drop.com/csgo_icons/99/995318ce7e665c45ad4fe9d5d63fbc40.png',
    description: 'Item description',
  })
  image: string;

  @ApiProperty({
    example: 'uploads/skins/bullet.jpg',
    description: 'Iteam small image',
  })
  imageSmall: string;

  @ApiProperty({
    example: 'Skins',
    description: 'Item type',
  })
  type: string;

  @ApiProperty({
    example: 'https://key-drop.com/pl/skins/category/bullet',
    description: 'Item url',
  })
  url: string;
}
