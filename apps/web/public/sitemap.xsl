<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="no" />

  <!-- ================= ROOT ================= -->
  <xsl:template match="/">
    <html lang="en">
      <head>
        <title>XML Sitemap</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>
          * { box-sizing: border-box; }
          html, body {
            margin: 0;
            padding: 0;
            background: #111213;
            color: #d4d4d4;
            font-family: Consolas, Monaco, "Courier New", monospace;
            font-size: 13px;
          }
          ::selection {
            background: #38393a;
            color: #ffffff;
          }
          .code {
            line-height: 1.5;
            padding: 6px 0 20px 0;
            counter-reset: line;
            white-space: pre;
            overflow-x: auto;
          }
          .ln {
            display: block;
            padding-left: 54px;
            position: relative;
          }
          .ln::before {
            counter-increment: line;
            content: counter(line);
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 42px;
            text-align: right;
            color: #616366;
            background: #191a1b;
            user-select: none;
            padding-right: 8px;
            border-right: 1px solid #2a2b2c;
          }
          .ln:hover {
            background: #1d1e20;
          }
          .punc { color: #808080; }
          .decl { color: #559A5A; }
          .tag { color: #3478BD; }
          .attr { color: #95A5A6; }
          .val { color: #D68910; }
          .text { color: #E0E0E0; }
          .link { color: #3B82F6; text-decoration: underline; }
        </style>
      </head>
      <body>
        <div class="code">
          <span class="ln"><span class="punc">&lt;?</span><span class="decl">xml version="1.0" encoding="UTF-8"</span><span class="punc">?&gt;</span></span>
          <span class="ln"><span class="punc">&lt;?</span><span class="decl">xml-stylesheet type="text/xsl" href="/sitemap.xsl"</span><span class="punc">?&gt;</span></span>
          <xsl:apply-templates select="node()" />
        </div>
      </body>
    </html>
  </xsl:template>

  <!-- ================= GENERIC ELEMENT RENDERER ================= -->
  <xsl:template match="*">
    <xsl:param name="depth" select="0" />
    <xsl:variable name="indent">
      <xsl:call-template name="repeat">
        <xsl:with-param name="text" select="'&#160;&#160;'" />
        <xsl:with-param name="count" select="$depth" />
      </xsl:call-template>
    </xsl:variable>

    <xsl:choose>

      <!-- Nodes with child elements -->
      <xsl:when test="count(*) &gt; 0">
        <span class="ln">
          <xsl:value-of select="$indent" disable-output-escaping="yes" />
          <span class="punc">&lt;</span><span class="tag"><xsl:value-of select="name()" /></span>
          <xsl:call-template name="attrs" />
          <span class="punc">&gt;</span>
        </span>
        <xsl:apply-templates select="*">
          <xsl:with-param name="depth" select="$depth + 1" />
        </xsl:apply-templates>
        <span class="ln">
          <xsl:value-of select="$indent" disable-output-escaping="yes" />
          <span class="punc">&lt;/</span><span class="tag"><xsl:value-of select="name()" /></span><span class="punc">&gt;</span>
        </span>
      </xsl:when>

      <!-- Nodes with text content -->
      <xsl:when test="normalize-space(text()) != ''">
        <span class="ln">
          <xsl:value-of select="$indent" disable-output-escaping="yes" />
          <span class="punc">&lt;</span><span class="tag"><xsl:value-of select="name()" /></span>
          <xsl:call-template name="attrs" />
          <span class="punc">&gt;</span>
          <xsl:choose>
            <xsl:when test="starts-with(text(), 'http://') or starts-with(text(), 'https://')">
              <span class="link"><xsl:value-of select="text()" /></span>
            </xsl:when>
            <xsl:otherwise>
              <span class="text"><xsl:value-of select="text()" /></span>
            </xsl:otherwise>
          </xsl:choose>
          <span class="punc">&lt;/</span><span class="tag"><xsl:value-of select="name()" /></span><span class="punc">&gt;</span>
        </span>
      </xsl:when>

      <!-- Empty self-closing nodes -->
      <xsl:otherwise>
        <span class="ln">
          <xsl:value-of select="$indent" disable-output-escaping="yes" />
          <span class="punc">&lt;</span><span class="tag"><xsl:value-of select="name()" /></span>
          <xsl:call-template name="attrs" />
          <span class="punc"> /&gt;</span>
        </span>
      </xsl:otherwise>

    </xsl:choose>
  </xsl:template>

  <!-- ================= ATTRIBUTES ================= -->
  <xsl:template name="attrs">
    <xsl:for-each select="@*">
      <xsl:text> </xsl:text><span class="attr"><xsl:value-of select="name()" /></span><span class="punc">=</span><span class="punc">"</span><span class="val"><xsl:value-of select="." /></span><span class="punc">"</span>
    </xsl:for-each>
  </xsl:template>

  <!-- ================= INDENT HELPER ================= -->
  <xsl:template name="repeat">
    <xsl:param name="text" />
    <xsl:param name="count" />
    <xsl:if test="$count &gt; 0">
      <xsl:value-of select="$text" disable-output-escaping="yes" />
      <xsl:call-template name="repeat">
        <xsl:with-param name="text" select="$text" />
        <xsl:with-param name="count" select="$count - 1" />
      </xsl:call-template>
    </xsl:if>
  </xsl:template>

</xsl:stylesheet>